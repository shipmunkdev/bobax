import React from 'react';
import Card from 'react-bootstrap/Card';
import Buttonx from '../Button/index.jsx';
import PropTypes from 'prop-types';
const IndCard = ({ boba }) => {
  return (
    <Card key={boba.name} variant='m-3' style={{ width: '18rem' }}>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>{boba.name}</Card.Title>
        <Card.Text>
          <div>{boba.description}</div>
          <div>${boba.price}</div>
        </Card.Text>
        <Buttonx variant={'primary'} text={'Add to cart'} />
      </Card.Body>
    </Card>
  );
};

IndCard.propTypes = {
  boba: PropTypes.object,
};

export default IndCard;
