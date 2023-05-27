import './styles.scss';
import FeedCard from '../../components/feedCard/feedCard';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';

type Announcement = {
  title: string;
  content: string;
  date: string;
};

export const FeedPage = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get<Announcement[]>('/announcement/list');
        setAnnouncements(response.data);
        setError(false);
      } catch {
        setError(true);
      }
    };
    fetchAnnouncements();
  }, []);

  const pgToDate = (pg: string) =>
    new Date(Date.now() + 1000 * 60 * -new Date().getTimezoneOffset())
      .toISOString()
      .replace('T', ' ')
      .replace('Z', '');

  return (
    <main className="feedPage">
      <div className="feedPage__wrapper">
        <h1 className="h1 colorBlue">Объявления</h1>
        <div className="feedPage__cards">
          {announcements.map((announcement, index) => (
            <FeedCard
              title={announcement.title}
              content={announcement.content}
              date={pgToDate(announcement.date).toString()}
              key={index}
            />
          ))}
        </div>
        {error && <p className="colorRed p-small">Ошибка загрузки объявлений</p>}
      </div>
    </main>
  );
};
