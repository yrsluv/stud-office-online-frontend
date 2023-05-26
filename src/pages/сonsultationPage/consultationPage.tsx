import React, { useEffect, useState } from 'react';
import './styles.scss';
import { TimePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

export const ConsultationPage = () => {
  const [pickedTime, setPickedTime] = useState<any>(null);
  const format = 'HH:mm';

  // const onChange: DatePickerProps['onChange'] = (date: ) => {
  //   console.log(date);
  // };

  return (
    <main>
      <div className="consultation__wrapper">
        <h1 className="h1 colorBlue">Запись на очную консультацию в студофис</h1>
        <div className="consultation__pickers">
          <TimePicker
            format={format}
            // onChange={(event) => {
            //   // event && setPickedTime(event);
            //   console.log(event);
            // }}
            onChange={onChange}
          />
        </div>
      </div>
    </main>
  );
};
