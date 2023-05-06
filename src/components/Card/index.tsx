import Card from 'react-bootstrap/Card';

import Button from 'components/Button';
import { OrderProps, BobaProps } from 'types/common/main';
import './index.css';

interface BobaCardProps extends OrderProps {
    product: BobaProps;
    setModalShow: (modalShow: boolean) => void;
    setCustomizationModal: (bobaInfoModal: BobaProps) => void;
}

const BobaCard = ({
    order,
    product,
    setOrder,
    setModalShow,
    setCustomizationModal,
}: BobaCardProps): JSX.Element => {
    const { id, name, price, imageLink, description } = product;

    const handleAddItemToCart = () => {
        const cartList = [...order, product];
        setOrder(cartList);
    };

    const handleCustomization = () => {
        setModalShow(true);
        setCustomizationModal(product);
    };

    return (
        <Card key={id} data-testid={id} style={{ width: '18rem' }}>
            <Card.Img variant='top' src={imageLink} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className='boba_desc'>{description}</Card.Text>
                <Card.Text>${price.toFixed(2)}</Card.Text>
                <Button variant={'primary'} label={'Customize'} onClick={handleCustomization} />
                <Button variant={'success'} label={'Add to cart'} onClick={handleAddItemToCart} />
            </Card.Body>
        </Card>
    );
};

export default BobaCard;
