import { Container } from 'react-bootstrap';
import BobaContainer from '../../components/BobaContainer';
import { BobaProps } from '../../assets/sampleBobaAPI';

const Homepage = ({ order }: { order: BobaProps[] }) => {
  return (
    <Container>
      <h1>Boba Drinks Card Content</h1>
      <BobaContainer order={order} />
    </Container>
  );
};

export default Homepage;
