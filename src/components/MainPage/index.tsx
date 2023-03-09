import NavigationBar from '../NavigationBar';
import Homepage from '../../pages/Home';
// import React, { useState } from 'react';
import { BobaProps } from '../../assets/sampleBobaAPI';

const MainPage = () => {
  // const [order , setOrder] = useState<BobaProps[]>([])
  const order: BobaProps[] = [];
  return (
    <>
      <NavigationBar order={order} />
      <Homepage order={order} />
    </>
  );
};

export default MainPage;
