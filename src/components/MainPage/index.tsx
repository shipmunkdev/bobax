import NavigationBar from '../NavigationBar';
import Homepage from '../../pages/Home';
import { useState } from 'react';
import { BobaProps } from '../../assets/sampleBobaAPI';

const MainPage = () => {
  const [order, setOrder] = useState<BobaProps[]>([]);

  return (
    <>
      <NavigationBar order={order} />
      <Homepage setOrder={setOrder} order={order} />
    </>
  );
};

export default MainPage;
