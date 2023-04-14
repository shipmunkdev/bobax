import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { OrderProps, BobaProps } from 'types/common/main';
import { toppingsList, milkList } from 'assets/sampleBobaAPI';
import BobaContainer from 'components/BobaContainer';
import SearchBar from 'components/SearchBar';
import CustomizeModal from 'components/Modal';
import BobaModalForm from './CustomizeBobaModalBody';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import useApi from 'hooks/API';

const Homepage = ({ order, setOrder }: OrderProps): JSX.Element => {
  const { data, loading } = useApi('http://127.0.0.1:8000/boba_list');
  const [filteredBobaList, setFilteredBobaList] = useState<BobaProps[]>(data);
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

  const filterBobaList = (data: BobaProps[], query: string, searchkey?: string): BobaProps[] => {
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
    if (searchQuery) {
      const filterlist = filterBobaList(data, searchQuery);
      if (filterlist.length === 0) {
        setFilteredBobaList([]);
      } else {
        setFilteredBobaList(filterlist);
      }
    }
  }, [searchQuery]);

  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/boba_list')
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       setBobaList(data);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  if (loading)
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );

  const BobaModalBody = ({ name, description, imageLink }: BobaProps) => (
    <>
      <img style={{ width: '24rem' }} src={imageLink} alt={name}></img>
      <p>{description}</p>
      <BobaModalForm
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
    <Container>
      <SearchBar
        searchLabel='Search Drink Here'
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <BobaContainer
        order={order}
        setOrder={setOrder}
        bobaList={filteredBobaList}
        setModalShow={setModalShow}
        setBobaInfoModal={setBobaInfoModal}
      />
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
  );
};

export default Homepage;
