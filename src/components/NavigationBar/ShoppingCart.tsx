import Badge from 'react-bootstrap/Badge';
import ShoppingCartIcon from './ShoppingCartIcon';
import { CartItemCountProps } from 'types/common/main';
import './shoppingcart.css';

const ShoppingCart = ({ cartItemsCount }: CartItemCountProps) => {
  return (
    <div className='cartwrapper'>
      <ShoppingCartIcon />
      <Badge bg='danger' className='badge badge-warning' id='lblCartCount'>
        {cartItemsCount}
      </Badge>
    </div>
  );
};

export default ShoppingCart;
