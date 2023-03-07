import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ButtonX = ({ variant, text }) => {
  ButtonX.propTypes = {
    variant: PropTypes.string,
    text: PropTypes.string,
  };

  return <Button variant={variant}>{text}</Button>;
};

export default ButtonX;
