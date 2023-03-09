import { Navbar, Nav } from 'react-bootstrap';
import ShoppingCart from './ShoppingCart';
import { BobaProps } from '../../assets/sampleBobaAPI';

const NavigationBar = ({ order }: { order: BobaProps[] }) => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#aboutus'>About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <ShoppingCart order={order} />
    </Navbar>
  );
};

export default NavigationBar;
