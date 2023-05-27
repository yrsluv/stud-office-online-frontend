import { useEffect, useState } from 'react';
import './styles.scss';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import axios from '../../api/axios';

type Slot = {
  time: string;
  name: string | null;
  course: number | null;
  group: string | null;
};

export const AdminConsultationPage = () => {
  const [pickedDate, setPickedDate] = useState<string | null>(
    [dayjs().year(), dayjs().month(), dayjs().date()].join('-')
  );
  const [fetchedSlots, setFetchedSlots] = useState<Slot[]>([]);
  const [error, setError] = useState(false);

  const dayjsToPgDate = (dayjsDate: string) => `${dayjsDate}T00:00:00.000000Z`;

  useEffect(() => {
    if (pickedDate === null) return;

    const fetchSlots = async () => {
      try {
        const response = await axios.get<Slot[]>('/Consultations', {
          params: { date: dayjsToPgDate(pickedDate) },
        });
        setFetchedSlots(response.data);
        setError(false);
      } catch {
        setError(true);
      }
    };
    fetchSlots();
  }, [pickedDate]);

  const allSlots: Slot[] = [
    {
      time: '10:00',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '10:15',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '10:30',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '10:45',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '11:00',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '11:15',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '11:30',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '11:45',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '12:00',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '12:15',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '12:30',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '12:45',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '15:00',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '15:15',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '15:30',
      name: null,
      course: null,
      group: null,
    },
    {
      time: '15:45',
      name: null,
      course: null,
      group: null,
    },
  ];

  function slot(key: number, time: string, name?: string, course?: number, group?: string) {
    return (
      <div className={`time-slot ${name ? 'time-slot__active' : ''}`} key={key}>
        <p className="time-slot_time">{time}</p>
        {name && (
          <>
            <p>{name}</p>
            <p>
              {course} курс, {group}
            </p>
          </>
        )}
      </div>
    );
  }

  const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    setPickedDate(dateString);
  };

  return (
    <main>
      <div className="schedule__wrapper">
        <h1 className="h1 colorBlue">Расписание консультаций студ-офиса</h1>
        <div className="schedule__inner">
          <DatePicker
            onChange={onDateChange}
            style={{ width: 282, height: 50 }}
            defaultValue={dayjs()}
          />
          <div className="schedule__table">
            {allSlots.map((sl: any, index) => {
              if (fetchedSlots.some((el) => el.time == sl.time))
                sl = { ...fetchedSlots.find((ell) => ell.time == sl.time) };
              return slot(index, sl.time, sl.name!, sl.course!, sl.group!);
            })}
          </div>
        </div>
        {error && <p className="colorRed p-small">Ошибка загрузки расписания</p>}
      </div>
    </main>
  );
};
