import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

ButtonX.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
};

const ButtonX = ({ variant, text }) => {
  return <Button variant={variant}>{text}</Button>;
};

export default ButtonX;
