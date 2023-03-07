// import Modalx from './cardmodal.jsx'
import { BobaProps } from '../../assets/sampleBobaAPI.js';
import Card from 'react-bootstrap/Card';
import Buttonx from '../Button/index.jsx';
import './index.css';

const BobaCard = ({ product }: { product: BobaProps }) => {
  const { name, price, description } = product;

  return (
    <Card key={name} style={{ width: '18rem' }}>
      {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
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
