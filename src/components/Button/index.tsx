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

  useEffect(() => {
    setOrderx(order);
  }, [order]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const total = [...orderx, product];
    setOrderx(total);
  };

  return (
    <Button variant={variant} onClick={handleClick}>
      {text}{' '}
    </Button>
  );
};

export default ButtonX;
