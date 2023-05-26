import React, { useEffect, useState } from 'react';
import './styles.scss';
import ServiceButton from '../../components/serviceButton/serviceButton';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import { ReactComponent as Reload } from '../../assets/reload.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import { ReactComponent as Document } from '../../assets/document.svg';

export const ServicePage = () => {
  return (
    <main>
      <div className="servicePage__container">
        <div className="servicePage__inner">
          <ServiceButton icon={<Document />} title="Получить справку об обучении" />
          <ServiceButton icon={<Heart />} title="Отправить справку о заболеваниях" />
          <ServiceButton icon={<Calendar />} title="Запись на очную консультацию в студофис" />
          <ServiceButton icon={<Reload />} title="Запрос на пересдачу" />
        </div>
      </div>
    </main>
  );
};
