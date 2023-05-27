import { useNavigate } from 'react-router-dom';
import './styles.scss';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';

const { Column, ColumnGroup } = Table;

type Data = {
  fullName: string;
  faculty: string;
  group: string;
  course: string;
  student_id: number;
};

export const StudentsPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<Data[]>('users/list');
        setData(response.data);
        setError(false);
      } catch {
        setError(true);
      }
    };
    getData();
  }, []);

  const handleRowClick = (record: Data) => {
    const { student_id } = record;
    navigate(`student#${student_id}`);
  };

  return (
    <main className="feedPage">
      <div className="feedPage__wrapper">
        <h1 className="h1 colorBlue">Список студентов</h1>
        <Table
          dataSource={data}
          pagination={{ pageSize: 5 }}
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
        >
          <Column title="ФИО" dataIndex="fullName" key="fullName" />
          <Column title="Факультет" dataIndex="faculty" key="faculty" />
          <Column title="Группа" dataIndex="group" key="group" />
          <Column title="Курс" dataIndex="course" key="course" />
        </Table>
        {error && <p className="colorRed p-small">Ошибка загрузки пользователей</p>}
      </div>
    </main>
  );
};
