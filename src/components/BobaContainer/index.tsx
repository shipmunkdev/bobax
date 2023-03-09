// import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BobaCard from '../Card';
import { bobaList, BobaProps } from '../../assets/sampleBobaAPI';
import './index.css';

const BobaContainer = ({ order }: { order: BobaProps[] }) => {
  return (
    <div className='indBoba'>
      <Row>
        {bobaList.map((boba: BobaProps) => (
          <Col
            className='boba_col'
            md='auto'
            key={boba.name}
            // onClick={togglemodal}
          >
            <BobaCard key={boba.name} product={boba} order={order} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BobaContainer;
