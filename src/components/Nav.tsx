import './Nav.scss';
import { Tabs } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const items = [
    { key: 'feed', label: 'Объявления' },
    { key: 'service', label: 'Услуги' },
    { key: 'status', label: 'Статусы заявок' },
  ];

  return (
    <nav className="nav" role="navigation">
      <Tabs defaultActiveKey="feed" items={items} onChange={(key) => navigate(`/${key}`)} />
    </nav>
  );
};
export default Nav;
