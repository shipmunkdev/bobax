import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const Modalx = ({ show, boba }) => {
  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{boba.description}</Modal.Body>
    </Modal>
  );
};

Modalx.propTypes = {
  show: PropTypes.bool,
  boba: PropTypes.object,
};

export default Modalx;
