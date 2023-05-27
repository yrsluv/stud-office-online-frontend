import { useNavigate } from 'react-router-dom';
import './styles.scss';
import { Space, Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  fullName: string;
  faculty: string;
  group: string;
  course: string;
  student_id: number;
}

const data: DataType[] = [
  {
    key: `1`,
    fullName: `Иванов Иван Иванович`,
    faculty: `ФЫВ23`,
    group: 'МФА-КА2',
    course: '1 курс',
    student_id: 1,
  },
  {
    key: `2`,
    fullName: `2Иванов Иван Иванович`,
    faculty: `ФЫВ23`,
    group: 'МФА-КА2',
    course: '1 курс',
    student_id: 2,
  },
  {
    key: `3`,
    fullName: `3Иванов Иван Иванович`,
    faculty: `ФЫВ23`,
    group: 'МФА-КА2',
    course: '1 курс',
    student_id: 3,
  },
  {
    key: `4`,
    fullName: `Иванов Иван Иванович`,
    faculty: `ФЫВ23`,
    group: 'МФА-КА2',
    course: '1 курс',
    student_id: 4,
  },
  {
    key: `5`,
    fullName: `2Иванов Иван Иванович`,
    faculty: `ФЫВ23`,
    group: 'МФА-КА2',
    course: '1 курс',
    student_id: 5,
  },
  {
    key: `6`,
    fullName: `3Иванов Иван Иванович`,
    faculty: `ФЫВ23`,
    group: 'МФА-КА2',
    course: '1 курс',
    student_id: 6,
  },
  {
    key: `7`,
    fullName: `Иванов Иван Иванович`,
    faculty: `ФЫВ23`,
    group: 'МФА-КА2',
    course: '1 курс',
    student_id: 7,
  },
  {
    key: `8`,
    fullName: `2Иванов Иван Иванович`,
    faculty: `ФЫВ23`,
    group: 'МФА-КА2',
    course: '1 курс',
    student_id: 8,
  },
  {
    key: `9`,
    fullName: `3Иванов Иван Иванович`,
    faculty: `ФЫВ23`,
    group: 'МФА-КА2',
    course: '12 курс',
    student_id: 9,
  },
];

export const StudentsPage = () => {
  const navigate = useNavigate();

  const handleRowClick = (record: DataType) => {
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
      </div>
    </main>
  );
};
