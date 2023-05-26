import React, { ReactNode } from 'react';
import './serviceButton.scss';

interface ServiceButtonProps {
  icon: ReactNode;
  title: string;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon, title }) => {
  return (
    <div className="serviceButton__container">
      {icon}
      <span className="paragraph">{title}</span>
    </div>
  );
};

export default ServiceButton;
