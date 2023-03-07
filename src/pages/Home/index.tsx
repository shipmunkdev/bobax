import React from 'react';
import { Container } from 'react-bootstrap';
import BobaContainer from '../../components/BobaContainer';

const Homepage = ({order}:{order:object}) => {
  return (
    <Container>
      <h1>Boba Drinks Card Content</h1>
      <BobaContainer order={order}/>
    </Container>
  );
};

export default Homepage;
