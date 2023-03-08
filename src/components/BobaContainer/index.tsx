import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BobaCard from '../Card';
import { bobaList, BobaListProps } from '../../assets/sampleBobaAPI';
import './index.css';

const BobaContainer = () => {
  return (
    <div className='indBoba'>
      <Row>
        {bobaList.map((boba: BobaListProps) => (
          <Col className='boba_col' md='auto' key={boba.name}>
            <BobaCard key={boba.name} product={boba} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BobaContainer;
