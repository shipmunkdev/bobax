import { Container } from 'react-bootstrap';
import BobaContainer from 'components/BobaContainer';
import { OrderProps } from 'types/common/main';
import  SearchBar from 'components/SearchBar'

const Homepage = (props: OrderProps): JSX.Element => {
  const { order, setOrder } = props;
  return (
    <Container>
      <h1>Boba Drinks Card Content</h1>
      <SearchBar />
      <BobaContainer order={order} setOrder={setOrder} />
    </Container>
  );
};

export default Homepage;
