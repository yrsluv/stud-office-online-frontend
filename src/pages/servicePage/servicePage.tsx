import React, { useEffect, useState } from 'react';
import './styles.scss';
import ServiceButton from '../../components/serviceButton/serviceButton';

export const servicePage = () => {
  return (
    <>
      <div>
        <ServiceButton logo={'document'} />
      </div>
    </>
  );
};
