import Badge from 'react-bootstrap/Badge';

import ShoppingCartIcon from '../Icons/ShoppingCartIcon';
import './index.css';

const ShoppingCart = ({ cartItemsCount }: { cartItemsCount: number }) => {
    return (
        <div data-testid='test-shopping-cart' className='cartwrapper'>
            <ShoppingCartIcon />
            <Badge bg='danger' className='badge badge-warning' id='lblCartCount'>
                {cartItemsCount}
            </Badge>
        </div>
    );
};

export default ShoppingCart;
