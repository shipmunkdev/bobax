import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

interface BaseModalProps {
  title: string;
  modalShow: boolean;
  onHide: () => void;
  Container: React.FC;
}

const BaseModal: React.FC<BaseModalProps> = ({ title, modalShow, onHide, Container }) => {
  return (
    <Modal
      show={modalShow}
      onHide={onHide}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <Container />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

BaseModal.propTypes = {
  title: PropTypes.string.isRequired,
  modalShow: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  Container: PropTypes.func.isRequired,
};

export default BaseModal;
