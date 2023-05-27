import { useNavigate } from 'react-router-dom';
import './styles.scss';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { Role } from '../../contexts/authContext';

const { Column } = Table;

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

export const StudentsPage = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get<Student[]>('/Students');
        setStudents(response.data);
        setError(false);
      } catch {
        setError(true);
      }
    };
    getStudents();
  }, []);

  return (
    <main className="feedPage">
      <div className="feedPage__wrapper">
        <h1 className="h1 colorBlue">Список студентов</h1>
        <Table
          dataSource={students.map((student) => ({
            id: student.id,
            fullName: [student.lastName, student.firstName, student.middleName].join(' '),
            faculty: student.faculty,
            group: student.group.name,
            course: student.course,
          }))}
          rowKey={'id'}
          pagination={{ pageSize: 5 }}
          onRow={(student) => ({
            onClick: () => navigate(`student#${student.id}`),
          })}
        >
          <Column title="ФИО" dataIndex="fullName" />
          <Column title="Факультет" dataIndex="faculty" />
          <Column title="Группа" dataIndex="group" />
          <Column title="Курс" dataIndex="course" />
        </Table>
        {error && <p className="colorRed p-small">Ошибка загрузки пользователей</p>}
      </div>
    </main>
  );
};
