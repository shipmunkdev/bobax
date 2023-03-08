import { BobaListProps } from '../../assets/sampleBobaAPI.js';
import Card from 'react-bootstrap/Card';
import Buttonx from '../Button/index.jsx';
import './index.css';

const BobaCard = ({ product }: { product: BobaListProps }) => {
  const { name, price, description } = product;

  return (
    <Card key={name} style={{ width: '18rem' }}>
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
