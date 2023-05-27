import React, { useEffect, useState } from 'react';
import './styles.scss';

import { useNavigate } from 'react-router-dom';
import FeedCard from '../../components/feedCard/feedCard';

export const FeedPage = () => {
  const navigate = useNavigate();

  const feed = [
    {
      title: 'Название объявления, название название',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '12 мая 2023г.',
    },
    {
      title: '1Название объявления, название название',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '12 мая 2023г.',
    },
    {
      title: '2Название объявления, название название',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '12 мая 2023г.',
    },
  ];

  return (
    <main>
      <div className="feed__wrapper">
        <h1 className="h1 colorBlue">Объявления</h1>
        <div className="feed__cards">
          {feed.map((value, index) => (
            <FeedCard title={value.title} content={value.content} date={value.date} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};
