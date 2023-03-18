import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BobaCard from 'components/Card';
import { OrderProps, BobaProps } from 'types/common/main';
import './index.css';

interface BobaContainerProps extends OrderProps {
  bobaListx: BobaProps[];
  setModalShow: (modalShow: boolean) => void;
  setBobaInfoModal: (bobaInfoModal: BobaProps) => void;
}

const BobaContainer = ({
  order,
  setOrder,
  bobaListx,
  setModalShow,
  setBobaInfoModal,
}: BobaContainerProps): JSX.Element => {
  return (
    <div className='indBoba'>
      {bobaListx ? (
        <Row>
          {bobaListx.map((boba: BobaProps) => (
            <Col className='boba_col' md='auto' key={boba.name}>
              <BobaCard
                key={boba.id}
                product={boba}
                order={order}
                setOrder={setOrder}
                setModalShow={setModalShow}
                setBobaInfoModal={setBobaInfoModal}
              />
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
