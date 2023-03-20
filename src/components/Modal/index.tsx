import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ModalProps } from 'types/common/main';
import Form from 'react-bootstrap/Form';

function BobaCustomizeableModal(props: ModalProps) {
  const { bobaInfoModal, modalShow, milk, setMilk, toppings, addTopping, onHide } = props;
  const { imageLink, description } = bobaInfoModal;

  return (
    <Modal
      show={modalShow}
      onHide={onHide}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{bobaInfoModal?.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <img style={{ width: '24rem' }} src={imageLink}></img>
        <p>{description}</p>
        <Form>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                Quantity
              </Col>
              <Col xs={6} md={4}>
                number
              </Col>
            </Row>

            <Col xs={12} md={8}>
              Milk(Required)
              <Form.Group>
                <Form.Check
                  type={'radio'}
                  id={'default-radio'}
                  label={'Organic Whole Milk'}
                  value={'Organic Whole Milk'}
                  onChange={(e) => {
                    setMilk(e.target.value);
                  }}
                  checked={milk === 'Organic Whole Milk'}
                />
                <Form.Check
                  type={'radio'}
                  id={'default-radio'}
                  label={'Oat Milk'}
                  value={'Oat Milk'}
                  onChange={(e) => {
                    setMilk(e.target.value);
                  }}
                  checked={milk === 'Oat Milk'}
                />
                <Form.Check
                  type={'radio'}
                  id={'default-radio'}
                  label={'Almond Milk'}
                  value={'Almond Milk'}
                  onChange={(e) => {
                    setMilk(e.target.value);
                  }}
                  checked={milk === 'Almond Milk'}
                />
              </Form.Group>
            </Col>
            <Row>
              <Col xs={12} md={8}>
                Toppings(Optional)
                <Form.Check
                  type={'checkbox'}
                  id={'default-checkbox'}
                  label={'Boba($0.75)'}
                  value={'Boba'}
                  onChange={(e) => {
                    addTopping(e.target.value, e.target.checked);
                  }}
                  checked={toppings.some((t) => t.name === 'Boba')}
                />
                <Form.Check
                  type={'checkbox'}
                  id={'default-checkbox'}
                  label={'Mango Jelly($0.75)'}
                  value={'Mango Jelly'}
                  onChange={(e) => {
                    addTopping(e.target.value, e.target.checked);
                  }}
                  checked={toppings.some((t) => t.name === 'Mango Jelly')}
                />
                <Form.Check
                  type={'checkbox'}
                  id={'default-checkbox'}
                  label={'Coconut Pudding($0.75)'}
                  value={'Coconut Pudding'}
                  onChange={(e) => {
                    addTopping(e.target.value, e.target.checked);
                  }}
                  checked={toppings.some((t) => t.name === 'Coconut Pudding')}
                />
              </Col>
              <Col xs={6} md={4}>
                Toggle Options(not done)
              </Col>
            </Row>
          </Container>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BobaCustomizeableModal;
