import { useState, useEffect } from 'react';
import './styles.scss';
import type { DatePickerProps } from 'antd';
import { DatePicker, Select, Button } from 'antd';
import axios from '../../api/axios';

type Slot = {
  time: string;
  name: string | null;
  course: number | null;
  group: string | null;
};

export const ConsultationPage = () => {
  const [pickedTime, setPickedTime] = useState<string | null>(null);
  const [pickedDate, setPickedDate] = useState<string | null>(null);
  const [fetchedSlots, setFetchedSlots] = useState<Slot[]>([]);
  const [error, setError] = useState<boolean>(true);

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

  const handleSubmit = () => null;

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

  const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    setPickedDate(dateString);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <main>
      <div className="service__wrapper">
        <h1 className="h1 colorBlue">Запись на очную консультацию в студофис</h1>
        <div className="consultation__pickersContainer">
          <div className="consultation__picker">
            <span className="consultation__label h4">Дата консультации</span>
            <DatePicker
              onChange={onDateChange}
              style={{ width: 282, height: 50 }}
              status={error ? 'error' : ''}
            />
          </div>
          <div className="consultation__picker">
            <span className="consultation__label h4">Доступное время консультации</span>
            <Select
              status={error ? 'error' : ''}
              defaultValue="00:00"
              style={{ width: 282, height: 50 }}
              onChange={handleChange}
              options={allSlots
                .filter((slot1) => fetchedSlots.every((slot2) => slot1 != slot2))
                .map((slot) => ({ value: slot.time, label: slot.time }))}
            />
            '
          </div>
        </div>
        <Button
          className="consultation__button button longRegular"
          type="primary"
          onClick={handleSubmit}
        >
          Записаться
        </Button>
      </div>
    </main>
  );
};
