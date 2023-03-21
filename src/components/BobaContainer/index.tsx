import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BobaCard from 'components/Card';
import { OrderProps, BobaProps } from 'types/common/main';
import './index.css';

interface BobaContainerProps extends OrderProps {
  bobaList: BobaProps[];
  setModalShow: (modalShow: boolean) => void;
  setBobaInfoModal: (bobaInfoModal: BobaProps) => void;
}

const BobaContainer = ({
  order,
  bobaList,
  setOrder,
  setModalShow,
  setBobaInfoModal,
}: BobaContainerProps): JSX.Element => {
  return bobaList ? (
    <div className='indBoba'>
      <Row>
        {bobaList.map((boba: BobaProps) => (
          <Col className='boba_col' md='auto' key={boba.name}>
            <BobaCard
              key={boba.id}
              order={order}
              product={boba}
              setOrder={setOrder}
              setModalShow={setModalShow}
              setCustomizationModal={setBobaInfoModal}
            />
          </Col>
        ))}
      </Row>
    </div>
  ) : (
    <div>Not Found</div>
  );
};

export default BobaContainer;
