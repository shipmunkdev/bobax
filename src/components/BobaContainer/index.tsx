import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BobaCard from 'components/Card';
import { OrderProps, BobaProps } from 'types/common/main';
import './index.css';

interface BobaContainerProps extends OrderProps {
  bobaListx: BobaProps[];
}

const BobaContainer = ({ order, setOrder, bobaListx }: BobaContainerProps): JSX.Element => {
  return (
    <div className='indBoba'>
      {bobaListx ? (
        <Row>
          {bobaListx.map((boba: BobaProps) => (
            <Col className='boba_col' md='auto' key={boba.name}>
              <BobaCard key={boba.id} product={boba} order={order} setOrder={setOrder} />
            </Col>
          ))}
        </Row>
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
};

export default BobaContainer;
