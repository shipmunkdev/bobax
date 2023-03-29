import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { OrderProps, BobaProps } from 'types/common/main';
import { bobaList } from 'assets/sampleBobaAPI';
import BobaContainer from 'components/BobaContainer';
import SearchBar from 'components/SearchBar';
import CustomizeModal from 'components/Modal';
import BobaModalform from './CustomizeBobaModalBody';

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
  const [toppings, setToppings] = useState<{ [key: string]: boolean }>({});

  const filterBobaList = (bobaList: BobaProps[], query: string): BobaProps[] => {
    return bobaList.filter((filtered: BobaProps) =>
      filtered.name.toLowerCase().includes(query.toLowerCase()),
    );
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

  const BobaModalBody = ({ name, description, imageLink }: BobaProps) => (
    <>
      <img style={{ width: '24rem' }} src={imageLink} alt={name}></img>
      <p>{description}</p>
      <BobaModalform
        milkType={milk}
        toppings={toppings}
        setMilkType={setMilk}
        setToppings={setToppings}
      />
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
