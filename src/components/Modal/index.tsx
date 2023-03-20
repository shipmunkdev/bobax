import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ModalProps } from 'types/common/main';
import React from 'react';

function BobaCustomizeableModal(props: ModalProps) {
  const { bobaInfoModal, modalShow, onHide } = props;
  const { imageLink, description } = bobaInfoModal;
  return (
    <Modal
      show={modalShow}
      onHide={onHide}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{bobaInfoModal?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <Container>
        <img style={{ width: '24rem' }} src={imageLink}></img>
        <p>{description}</p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BobaCustomizeableModal;
