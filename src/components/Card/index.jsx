import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Buttonx from '../Button/index.jsx';
import PropTypes from 'prop-types';
import './index.css'
const IndCard = ({ boba }) => {
  return (
    <Col className='boba_col' md='auto' key={boba.name}>
        <Card key={boba.name} variant='m-3' style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
            <Card.Title>{boba.name}</Card.Title>
            <Card.Text>
            <div className='boba_desc'>{boba.description}</div>
            <div>${boba.price}</div>
            </Card.Text>
            <Buttonx variant={'primary'} text={'Add to cart'} />
        </Card.Body>
        </Card>
    </Col>
  );
};

IndCard.propTypes = {
  boba: PropTypes.object,
};

export default IndCard;
