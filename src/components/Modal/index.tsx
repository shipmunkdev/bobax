import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CustomizeBobaModalProps } from 'types/common/main';
import Form from 'react-bootstrap/Form';
import  CustomizeRadioButton from 'components/RadioButton';


function CustomizeBobaModal(props: CustomizeBobaModalProps) {
  const { bobaInfoModal, modalShow, onHide } = props;
  const { name,imageLink, description } = bobaInfoModal;
  return (
    <Modal
      show={modalShow}
      onHide={onHide}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
      <Form>
        <Container>
          <img style={{ width: '26rem' }} src={imageLink}></img>
          <p>{description}</p>
          <Row>
            <Col xs={12} md={8}>
              Quantity
            </Col>
            <Col xs={6} md={4}>
              number
            </Col>
          </Row>
          <Row>
              Milk(Required)
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

export default CustomizeBobaModal;
