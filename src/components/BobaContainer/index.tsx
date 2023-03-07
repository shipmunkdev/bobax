// import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import bobaList from './bobalist.jsx';
import BobaCard from '../Card';
import { bobaList, BobaListProps } from '../../assets/sampleBobaAPI';
import './index.css';

const BobaContainer = () => {
  // const [show, setShow] = useState (false)
  // const togglemodal = () => {setShow(true)}
  // const boba = getBobaOptions('GET','/')

  return (
    <div className='indBoba'>
      <Row>
        {bobaList.map((boba: BobaListProps) => (
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
