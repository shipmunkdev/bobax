import { Container } from 'react-bootstrap';

import BobaContainer from 'components/BobaContainer';
import { OrderProps } from 'types/common/main';

const Homepage = (props: OrderProps): JSX.Element => {
  const { order, setOrder } = props;
  return (
    <Container>
      <h1>Boba Drinks Card Content</h1>
      <BobaContainer order={order} setOrder={setOrder} />
    </Container>
  );
};

export default Homepage;
