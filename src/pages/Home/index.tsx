import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { OrderProps, BobaProps } from 'types/common/main';
import { bobaList, toppingsList, milkList } from 'assets/sampleBobaAPI';
import BobaContainer from 'components/BobaContainer';
import SearchBar from 'components/SearchBar';
import CustomizeModal from 'components/Modal';
import BobaModalForm from './CustomizeBobaModalBody';
import Button from 'react-bootstrap/Button';

const Homepage = ({ order, setOrder }: OrderProps): JSX.Element => {
  const [filteredBobaList, setFilteredBobaList] = useState<BobaProps[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading ] = useState<boolean>(true);
  const [bobaInfoModal, setBobaInfoModal] = useState<BobaProps>({
    id: '',
    name: '',
    description: '',
    price: 0,
    imageLink: '',
  });
  const [milk, setMilk] = useState<string>('');
  const [toppings, setToppings] = useState<{ [key: string]: boolean }>({});

  const filterBobaList = (bobaList: BobaProps[], query: string): BobaProps[] => {
    return bobaList.filter((filtered: BobaProps) =>
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
      const filterlist = filterBobaList(bobaList, searchQuery);
      if (filterlist.length === 0) {
        setFilteredBobaList([]);
      } else {
        setFilteredBobaList(filterlist);
      }
    } else {
      setFilteredBobaList(bobaList);
    }
  }, [searchQuery]);

  // console.log(order, 'this is order3'); // this is for you, u said you want to see the console.log

  useEffect(() => {
    fetch('http://127.0.0.1:8000/boba_list',{mode:'cors'})
    .then(response => {
      if (response.ok){
        return response.json()
      }
      throw response;
    })
    .then(data => {
      console.log(data, 'this is data')
      setFilteredBobaList(data)
    })
    .catch(error => {
      console.log(error,'this is error')
      setError(error)
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])

  if (loading) return <div>Loading...</div>

  if (error) return <div>Error!</div>

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
