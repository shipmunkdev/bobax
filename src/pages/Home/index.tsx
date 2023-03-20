import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { OrderProps, BobaProps } from 'types/common/main';
import { bobaList } from 'assets/sampleBobaAPI';
import BobaContainer from 'components/BobaContainer';
import SearchBar from 'components/SearchBar';
import CustomizeBobaModal from 'components/Modal';

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
      <CustomizeBobaModal
        bobaInfoModal={bobaInfoModal}
        modalShow={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default Homepage;
