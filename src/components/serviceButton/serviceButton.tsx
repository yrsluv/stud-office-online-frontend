import React, { ReactNode } from 'react';
import './serviceButton.scss';

interface ServiceButtonProps {
  icon: ReactNode;
  title: string;
  navigate: () => void;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon, title, navigate }) => {
  return (
    <div className="serviceButton__container" onClick={() => navigate()}>
      <div className="svg__wrapper">{icon}</div>
      <span className="paragraph">{title}</span>
    </div>
  );
};

export default ServiceButton;
