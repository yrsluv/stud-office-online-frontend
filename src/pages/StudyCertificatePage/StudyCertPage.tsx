import { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../api/axios';
import { Button } from 'antd';
import jsPDF from 'jspdf';
import '../../assets/times-normal';
import '../../assets/times-bold';
import '../../assets/times-italic';
import './styles.scss';
import '../../assets/times-bolditalic';
import { Role } from '../../contexts/authContext';
import dayjs from 'dayjs';

type Student = {
  citizenship: string;
  course: number;
  educationBase: string;
  educationEnd: string;
  educationForm: string;
  educationStart: string;
  email: string;
  faculty: { id: number; name: string };
  firstName: string;
  group: { id: number; name: string };
  id: number;
  lastName: string;
  middleName: string;
  orderNumber: string;
  orderDate: string;
  role: Role;
  studentCard: string;
};

const pgToDateString = (pg: string) => {
  const date = dayjs(
    new Date(Date.now() + 1000 * 60 * -new Date().getTimezoneOffset())
      .toISOString()
      .replace('T', ' ')
      .replace('Z', '')
  );

  return [date.date(), date.month(), date.year()].join('.');
};

const StudyCertPage = () => {
  const [permissionError, setPermissionError] = useState<boolean>(false);
  const [pdfGenError, setPdfGenError] = useState<boolean>(false);

  const handleGetSudyCert = async () => {
    let student: Student;

    const fetchStudent = async () => {
      try {
        const response = await axiosInstance.get<Student>('/Students/me');
        student = response.data;
        setPermissionError(false);
      } catch {
        setPermissionError(true);
      }
    };
    await fetchStudent();

    const generetePdf = async () => {
      try {
        const htmlResponse = await axios.get<string>('/study-cert.html');

        const html = htmlResponse.data
          .replace('{date}', dayjs().date().toString())
          .replace('{month}', dayjs().month().toString())
          .replace('{year}', dayjs().year().toString())
          .replace('{studentCard}', dayjs().year().toString())
          .replace(
            '{fullName}',
            [student.lastName, student.firstName, student.middleName].join(' ')
          )
          .replace('{course}', student.course.toString())
          .replace('{eduStartDate}', pgToDateString(student.educationStart))
          .replace('{eduEndDate}', pgToDateString(student.educationEnd))
          .replace('{orderNumber}', student.orderNumber)
          .replace('{orderDate}', pgToDateString(student.orderDate))
          .replace('{educationBase}', student.educationBase);

        const doc = new jsPDF();
        doc.setLanguage('ru');
        doc.html(html, {
          callback: (doc) => {
            doc.setLanguage('ru');
            doc.setFont('times', 'normal');
            doc.output('dataurlnewwindow');
          },
          windowWidth: 600,
          width: 180,
          x: 15,
          y: 10,
        });

        setPdfGenError(false);
      } catch {
        setPdfGenError(true);
      }
    };
    await generetePdf();
  };

  return (
    <main className="studyCertPage" role="main">
      <div className="studyCertPage__wrapper">
        <h1 className="h1 colorBlue">Запрос справки об обучении</h1>
        <Button type="primary" onClick={handleGetSudyCert} className="button button_red">
          Запросить справку об обучении
        </Button>

        {permissionError && <p className="colorRed p-small">Вы ещё/уже не учитесь в МИФИ</p>}
        {pdfGenError && <p className="colorRed p-small">Ошибка генерации справки</p>}
      </div>
    </main>
  );
};
export default StudyCertPage;
