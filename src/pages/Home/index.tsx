import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { OrderProps, BobaProps, ToppingProps } from 'types/common/main';
import { bobaList } from 'assets/sampleBobaAPI';
import BobaContainer from 'components/BobaContainer';
import SearchBar from 'components/SearchBar';
import BobaCustomizeableModal from 'components/Modal';

const Homepage = ({ order, setOrder }: OrderProps): JSX.Element => {
  const [filteredBobaList, setFilteredBobaList] = useState<BobaProps[]>(bobaList);
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
  const [toppings, setToppings] = useState<ToppingProps[]>([]);

  const filterBobaList = (bobaList: BobaProps[], query: string): BobaProps[] => {
    return bobaList.filter((filtered: BobaProps) =>
      filtered.name.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const addTopping = (topping: string, checked: boolean) => {
    if (checked) {
      let toppingandvalue: ToppingProps;
      if (topping == 'Boba') {
        toppingandvalue = { name: 'Boba', price: 0.75 };
      } else if (topping == 'Mango Jelly') {
        toppingandvalue = { name: 'Mango Jelly', price: 0.75 };
      } else if (topping == 'Coconut Pudding') {
        toppingandvalue = { name: 'Coconut Pudding', price: 0.75 };
      } else {
        return;
      }
      const updatedtopping: ToppingProps[] = [...toppings, toppingandvalue];
      setToppings(updatedtopping);
    } else {
      const updatedToppings = toppings.filter((t) => t.name !== topping);
      setToppings(updatedToppings);
    }
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

  return (
    <Container>
      <h1>Boba Drinks Card Content</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BobaContainer
        order={order}
        setOrder={setOrder}
        bobaList={filteredBobaList}
        setModalShow={setModalShow}
        setBobaInfoModal={setBobaInfoModal}
      />
      <BobaCustomizeableModal
        bobaInfoModal={bobaInfoModal}
        modalShow={modalShow}
        milk={milk}
        setMilk={setMilk}
        toppings={toppings}
        addTopping={addTopping}
        onHide={() => {
          setModalShow(false);
          setMilk('');
          setToppings([]);
        }}
      />
    </Container>
  );
};

export default Homepage;
