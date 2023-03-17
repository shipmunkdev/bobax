import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BobaCard from 'components/Card';
import { OrderProps, BobaProps } from 'types/common/main';
import './index.css';

interface BobaContainerProps extends OrderProps {
  bobaList: BobaProps[];
}

const BobaContainer = ({ order, setOrder, bobaList }: BobaContainerProps): JSX.Element => {
  return bobaList ? (
    <div className='indBoba' data-testid='bobaList'>
      <Row>
        {bobaList.map((boba: BobaProps) => (
          <Col className='boba_col' md='auto' key={boba.name}>
            <BobaCard key={boba.id} product={boba} order={order} setOrder={setOrder} />
          </Col>
        ))}
      </Row>
    </div>
  ) : (
    <div>Not Found</div>
  );
};

export default BobaContainer;
