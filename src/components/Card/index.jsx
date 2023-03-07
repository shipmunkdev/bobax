// import Modalx from './cardmodal.jsx'
import Card from 'react-bootstrap/Card';
import Buttonx from '../Button/index.jsx';
import PropTypes from 'prop-types';
import './index.css';

BobaCard.propTypes = {
  product: {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    // imageLink:PropTypes.string,
  },
};

const BobaCard = ({ product }) => {
  // const [item, setItem] = useState ('')

  // const addtocart = async(e) => {
  //     e.preventDefault();
  //     //add data here ?
  // }

  const { name, price, description } = product;

  return (
    <Card key={name} variant='m-3' style={{ width: '18rem' }}>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div className='boba_desc'>{description}</div>
          <div>${price}</div>
        </Card.Text>
        <Buttonx variant={'primary'} text={'Add to cart'} />
      </Card.Body>
    </Card>
  );
};

export default BobaCard;
