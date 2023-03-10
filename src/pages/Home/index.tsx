import { Container } from 'react-bootstrap';
import BobaContainer from '../../components/BobaContainer';
import { BobaProps } from '../../assets/sampleBobaAPI';
interface HomePageProps {
  order: BobaProps[];
  setOrder: (order: BobaProps[]) => void;
}
const Homepage = (props: HomePageProps): JSX.Element => {
  const { order, setOrder } = props;
  return (
    <Container>
      <h1>Boba Drinks Card Content</h1>
      <BobaContainer order={order} setOrder={setOrder} />
    </Container>
  );
};

export default Homepage;
