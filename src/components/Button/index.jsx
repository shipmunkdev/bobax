import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

const ButtonX = ({variant,text}) =>{
    return (
        <Button variant={variant}>{text}</Button>
    )
}

ButtonX.propTypes = {
    variant : PropTypes.string,
    text : PropTypes.string
}

export default ButtonX
