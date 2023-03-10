import Button from 'react-bootstrap/Button';
import { BobaProps } from '../../assets/sampleBobaAPI';
import React, { useEffect, useState } from 'react';

const ButtonX = ({
  variant,
  text,
  order,
  product,
}: {
  order: BobaProps[];
  text: string;
  variant: string;
  product: BobaProps;
}) => {
  const [orderx, setOrderx] = useState<BobaProps[]>(order);

  console.log(orderx, 'this is inside button 1')
  useEffect(() => {
    // setOrderx(order);
    console.log(order, 'this is inside button 12')
  }, [order]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const total = [...orderx, product];
    console.log(total, 'this is inside button 2')
    setOrderx(total);
    order.push(product)
    console.log(order, 'this is inside button 3')
  };

  return (
    <Button variant={variant} onClick={handleClick}>
      {text}{' '}
    </Button>
  );
};

export default ButtonX;
