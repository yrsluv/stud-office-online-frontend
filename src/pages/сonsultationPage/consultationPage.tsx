import { useState } from 'react';
import './styles.scss';
import type { DatePickerProps } from 'antd';
import { DatePicker, Select, Button } from 'antd';

export const ConsultationPage = () => {
  const [pickedTime, setPickedTime] = useState<string | null>(null);
  const [pickedDate, setPickedDate] = useState<string | null>(null);
  const [isFieldsCorrect, setIsFieldsCorrect] = useState<boolean>(true);

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
              status={!isFieldsCorrect ? 'error' : ''}
            />
          </div>
          <div className="consultation__picker">
            <span className="consultation__label h4">Доступное время консультации</span>
            <Select
              status={!isFieldsCorrect ? 'error' : ''}
              defaultValue="00:00"
              style={{ width: 282, height: 50 }}
              onChange={handleChange}
              options={[
                { value: '10:45', label: '10:45' },
                { value: '11:00', label: '11:00' },
                { value: '12:00', label: '12:00' },
              ]}
            />
            '
          </div>
        </div>
        <Button
          className="consultation__button button longRegular"
          type="primary"
          onClick={() => {
            pickedTime && pickedDate ? setIsFieldsCorrect(true) : setIsFieldsCorrect(false);
          }}
        >
          Записаться
        </Button>
      </div>
    </main>
  );
};
