import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BobaCard from '../Card';
import { bobaList, BobaProps } from '../../assets/sampleBobaAPI';
import './index.css';

interface BobaContainerProps {
  order: BobaProps[];
  setOrder: (order: BobaProps[]) => void;
}

const BobaContainer = (props: BobaContainerProps): JSX.Element => {
  const { order, setOrder } = props;
  return (
    <div className='indBoba'>
      <Row>
        {bobaList.map((boba: BobaProps) => (
          <Col className='boba_col' md='auto' key={boba.name}>
            <BobaCard key={boba.id} product={boba} order={order} setOrder={setOrder} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BobaContainer;
