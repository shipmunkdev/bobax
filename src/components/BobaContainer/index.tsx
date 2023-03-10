import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BobaCard from '../Card';
import { bobaList, BobaProps } from '../../assets/sampleBobaAPI';
import './index.css';

const BobaContainer = () => {
  return (
    <div className='indBoba'>
      <Row>
        {bobaList.map((boba: BobaProps) => (
          <Col className='boba_col' md='auto' key={boba.name}>
            <BobaCard key={boba.name} product={boba} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BobaContainer;
