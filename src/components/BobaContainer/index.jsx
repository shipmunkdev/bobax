import React from 'react';
import bobalist from './bobalist.jsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css'

const BobaContainer = () => {
  return (
    <div className='indBoba'>
        {bobalist.map((boba) => (
            <Card key={boba.name} style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{boba.name}</Card.Title>
                    <Card.Text>
                        <div>{boba.description}</div>
                        <div>${boba.price}</div>
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default BobaContainer;
