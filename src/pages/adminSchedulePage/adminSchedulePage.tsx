import React, { useEffect, useState } from 'react';
import './styles.scss';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

export const AdminSchedulePage = () => {
  const [pickedDate, setPickedDate] = useState<string | null>(null);

  const fetchedArr: any[] = [
    {
      time: '10:00',
      name: 'Иванов И И',
      course: 2,
      group: 'ИВР23',
    },
    {
      time: '10:30',
      name: 'Иванов И И',
      course: 2,
      group: 'ИВР23',
    },
  ];
  const allSlots = [
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
      time: '11:15',
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
      time: '11:15',
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
  ];

  function slot(time: string, name?: string, course?: number, group?: string) {
    return (
      <div className={`time-slot ${name ? 'time-slot__active' : ''}`}>
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
            {allSlots.map((sl) => {
              if (fetchedArr.some((el) => el.time == sl.time))
                sl = { ...fetchedArr.find((ell) => ell.time == sl.time) };
              return slot(sl.time, sl.name!, sl.course!, sl.group!);
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
