import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { OrderProps, BobaProps } from 'types/common/main';
import BobaContainer from 'components/BobaContainer';
import SearchBar from 'components/SearchBar';
import CustomizeModal from 'components/Modal';
import Loading from 'components/Loading';
import BobaModalForm from './CustomizeBobaModalBody';
import Button from 'react-bootstrap/Button';
import useApi from 'hooks/API';
import Card from 'react-bootstrap/Card';

const Homepage = ({ order, setOrder }: OrderProps): JSX.Element => {
  const BACKEND_API = process.env.REACT_APP_BOBA_FETCH;
  const { data, error, loading } = useApi(BACKEND_API as string, '/boba_list');
  const { data: toppingsList } = useApi(BACKEND_API as string, '/toppings_option');

  const { data: milkList } = useApi(BACKEND_API as string, '/milk_option');

  const [filteredBobaList, setFilteredBobaList] = useState<BobaProps[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [bobaInfoModal, setBobaInfoModal] = useState<BobaProps>({
    id: '',
    name: '',
    description: '',
    price: 0,
    imageLink: '',
  });

  const [milk, setMilk] = useState<string>('');
  const [toppings, setToppings] = useState<{ [key: string]: boolean }>({});

  const filterBobaList = (data: BobaProps[], query: string): BobaProps[] => {
    return data.filter((filtered: BobaProps) =>
      filtered.name.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const handleCustomizeBoba = () => {
    const selectedTopping = [];

    for (const [key, value] of Object.entries(toppings)) {
      if (value == true) {
        selectedTopping.push(toppingsList[key]);
      }
    }

    const bobaInfoModalWithOptions = {
      ...bobaInfoModal,
      options: {
        milk: milkList[milk],
        toppings: selectedTopping,
      },
    };

    const cartList = [...order, bobaInfoModalWithOptions];
    setOrder(cartList);
    setModalShow(false);
    setMilk('');
    setToppings({});
  };

  useEffect(() => {
    if (data) {
      setFilteredBobaList(data);
    }
    if (searchQuery) {
      const filterlist = filterBobaList(data, searchQuery);
      setFilteredBobaList(filterlist);
    }
  }, [searchQuery, data]);

  const BobaModalBody = ({ name, description, imageLink }: BobaProps) => (
    <>
      <img style={{ width: '24rem' }} src={imageLink} alt={name}></img>
      <p>{description}</p>
      <BobaModalForm
        milkList={milkList}
        toppingsList={toppingsList}
        milkType={milk}
        toppingsType={toppings}
        setMilkType={setMilk}
        setToppingsType={setToppings}
      />
      <Button id='addtocart-button' data-testid='addtocart-button' onClick={handleCustomizeBoba}>
        Add to cart
      </Button>
    </>
  );

  return (
    <>
      {error.status != 0 ? (
        <Card>
          <Card.Body>
            {error.status} {error.message}
          </Card.Body>
        </Card>
      ) : (
        <Container>
          <SearchBar
            searchLabel='Search Drink Here'
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          {loading ? (
            <Loading />
          ) : (
            <BobaContainer
              order={order}
              setOrder={setOrder}
              bobaList={filteredBobaList}
              setModalShow={setModalShow}
              setBobaInfoModal={setBobaInfoModal}
            />
          )}
          <CustomizeModal
            title={bobaInfoModal.name}
            modalShow={modalShow}
            onHide={() => {
              setModalShow(false);
              setMilk('');
              setToppings({});
            }}
            ModalBody={() => BobaModalBody(bobaInfoModal)}
          />
        </Container>
      )}
    </>
  );
};

export default Homepage;
