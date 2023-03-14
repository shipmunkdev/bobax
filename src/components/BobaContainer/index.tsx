import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BobaCard from 'components/Card';
import { bobaList } from 'assets/sampleBobaAPI';
import { OrderProps, BobaProps } from 'types/common/main';
import './index.css';

const BobaContainer = (props: OrderProps): JSX.Element => {
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
