import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProtectedContent from '../ProtectedContent/ProtectedContent';
import { Role } from '../../contexts/authContext';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState('feed');

  const itemsStudent = [
    { key: 'feed', label: 'Объявления' },
    { key: 'service', label: 'Услуги' },
  ];
  const itemsAdmin = [
    { key: 'feed', label: 'Объявления' },
    { key: 'consultations', label: 'Консультации' },
    { key: 'students', label: 'Студенты' },
  ];
  const itemsTeacher = [
    { key: 'feed', label: 'Объявления' },
    { key: 'retake', label: 'Пересдачи' },
    { key: 'students', label: 'Студенты' },
  ];

  useEffect(() => {
    setActiveKey(location.pathname.split('/')[1]);
  }, [location.pathname]);

  return (
<<<<<<< HEAD
    <nav className="nav paragraph" role="navigation">
      <ProtectedContent allowedRole={Role.Student}>
=======
    <nav className="nav" role="navigation">
      <ProtectedContent allowedRole="Student">
>>>>>>> a01951ca6a8c57041f3eb93499388b48fc04bde2
        <Tabs activeKey={activeKey} items={itemsStudent} onChange={(key) => navigate(`/${key}`)} />
      </ProtectedContent>
      <ProtectedContent allowedRole="Admin">
        <Tabs activeKey={activeKey} items={itemsAdmin} onChange={(key) => navigate(`/${key}`)} />
      </ProtectedContent>
      <ProtectedContent allowedRole="Teacher">
        <Tabs activeKey={activeKey} items={itemsTeacher} onChange={(key) => navigate(`/${key}`)} />
      </ProtectedContent>
    </nav>
  );
};
export default Nav;
