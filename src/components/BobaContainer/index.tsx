// import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BobaCard from '../Card';
import { bobaList, BobaProps } from '../../assets/sampleBobaAPI';
import './index.css';

const BobaContainer = () => {
  // const [show, setShow] = useState (false)
  // const togglemodal = () => {setShow(true)}
  // const boba = getBobaOptions('GET','/')

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
            <BobaCard key={boba.name} product={boba} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BobaContainer;
