// import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Buttonx from '../Button/index.jsx';
import PropTypes from 'prop-types';
// import Modalx from './cardmodal.jsx'

import './index.css'

const IndCard = ({ boba }) => {

    // const [item, setItem] = useState ('')
    // const [show, setShow] = useState (false)

    // const addtocart = async(e) => {
    //     e.preventDefault();
    //     //add data here ?
    // }

    // const togglemodal = () => {setShow(true)}

    return (
    <Col className='boba_col' md='auto' key={boba.name}
    // onClick={togglemodal}
    >
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
        {/* <Modalx show={show} /> */}
    </Col>
  );
};

IndCard.propTypes = {
  boba: PropTypes.object,
};

export default IndCard;
