import React, { ReactNode } from 'react';
import './feedCard.scss';

interface FeedCardProps {
  title: string;
  content: string;
  date: string;
}

const FeedCard: React.FC<FeedCardProps> = ({ title, content, date }) => {
  return (
    <div className="feedCard__container">
      <p className="title h3">{title}</p>
      <p className="content paragraph">{content}</p>
      <p className="date paragraph colorGray">{date}</p>
    </div>
  );
};

export default FeedCard;
