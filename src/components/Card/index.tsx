import Card from 'react-bootstrap/Card';
import Button from 'components/Button';
import { OrderProps, BobaProps } from 'types/common/main';
import './index.css';

interface BobaCardProps extends OrderProps {
  product: BobaProps;
}

const BobaCard = ({ order, setOrder, product }: BobaCardProps): JSX.Element => {
  const { id, name, price, imageLink, description } = product;

  const handleAddItemToCart = () => {
    const cartList = [...order, product];
    setOrder(cartList);
  };

  return (
    <Card key={id} data-testid={id} style={{ width: '18rem' }}>
      <Card.Img variant='top' src={imageLink} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="boba_desc">
          {description}
        </Card.Text>
        <Card.Text>
          ${price}
        </Card.Text>
        <Button variant={'primary'} label={'Add to cart'} onClick={handleAddItemToCart} />
      </Card.Body>
    </Card>
  );
};

export default BobaCard;
