import Card from 'react-bootstrap/Card';
import Button from 'components/Button';
import { OrderProps, BobaProps } from 'types/common/main';
import './index.css';

interface BobaCardProps extends OrderProps {
  product: BobaProps;
  setModalShow:(modalShow:boolean)=> void;
  setBobaInfoModal:(bobaInfoModal:BobaProps) => void;
}

const BobaCard = ({ order, setOrder, product,setModalShow ,setBobaInfoModal}: BobaCardProps): JSX.Element => {

  const { id, name, price, imageLink, description } = product;

  const handleAddItemToCart = () => {
    const cartList = [...order, product];
    setOrder(cartList);
  };

  const customizeBoba = () =>{
    setModalShow(true)
    setBobaInfoModal(product)
  }

  return (
    <Card key={id} style={{ width: '18rem' }}>
      <Card.Img variant='top' src={imageLink} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div className='boba_desc'>{description}</div>
          <div>${price}</div>
        </Card.Text>
        <Button variant={'primary'} label={'Customize'} onClick={customizeBoba} />
        <Button variant={'success'} label={'Add to cart'} onClick={handleAddItemToCart} />
      </Card.Body>
    </Card>
  );
};

export default BobaCard;
