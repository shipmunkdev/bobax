import NavigationBar from '../NavigationBar';
import Homepage from '../../pages/Home';
import React, { useEffect, useState } from 'react';
import { BobaProps } from '../../assets/sampleBobaAPI';

const MainPage = () => {
  const [order , setOrder] = useState<BobaProps[]>([])
  // const order: BobaProps[] = [];
  console.log(order, 'this is inside main')

  useEffect(() => {
    console.log(order, 'this is inside main 2')
  },[order])
  
  return (
    <>
      <NavigationBar order={order} />
      <Homepage order={order} />
    </>
  );
};

export default MainPage;
