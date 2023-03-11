import NavigationBar from '../../components/NavigationBar';
import Homepage from '../Home';
import { useState } from 'react';
import { BobaProps } from '../../assets/sampleBobaAPI';

const MainPage = () => {
  const [order, setOrder] = useState<BobaProps[]>([]);

  return (
    <>
      <NavigationBar length={order.length} />
      <Homepage order={order} setOrder={setOrder} />
    </>
  );
};

export default MainPage;
