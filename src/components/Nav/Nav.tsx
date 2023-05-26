import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState('feed');

  const items = [
    { key: 'feed', label: 'Объявления' },
    { key: 'service', label: 'Услуги' },
    { key: 'status', label: 'Статусы заявок' },
  ];

  useEffect(() => {
    setActiveKey(location.pathname.split('/')[1]);
  }, [location.pathname]);

  return (
    <nav className="nav" role="navigation">
      <Tabs activeKey={activeKey} items={items} onChange={(key) => navigate(`/${key}`)} />
    </nav>
  );
};
export default Nav;
