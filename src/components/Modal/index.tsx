import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

export interface BaseModalProps {
  title: string;
  modalShow: boolean;
  onHide: () => void;
  ModalBody?: React.FC;
}

const BaseModal: React.FC<BaseModalProps> = ({ title, modalShow, onHide, ModalBody }) => {
  return (
    <Modal
      show={modalShow}
      onHide={onHide}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter' data-testid='modal-title'>
          {title}
        </Modal.Title>
      </Modal.Header>
      {ModalBody ? (
        <Modal.Body id='modal-body' data-testid='modal-body' className='show-grid'>
          <ModalBody />
        </Modal.Body>
      ) : (
        <></>
      )}
      <Modal.Footer>
        <Button id='modal-close-button' data-testid='modal-close-button' onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

BaseModal.propTypes = {
  title: PropTypes.string.isRequired,
  modalShow: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  ModalBody: PropTypes.func,
};

export default BaseModal;
