import PropTypes from 'prop-types';
import BootstrapButton, { ButtonProps as BootstrapButtonProps } from 'react-bootstrap/Button';

interface ButtonProps extends BootstrapButtonProps {
    label: string;
    onClick?: React.MouseEventHandler; // optional onClick handler
    [key: string]: unknown; // allow additional props
}

const Button: React.FC<ButtonProps> = ({ variant, label, ...rest }) => {
    return (
        <BootstrapButton variant={variant} {...rest}>
            {label}
        </BootstrapButton>
    );
};

Button.propTypes = {
    variant: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Button;
