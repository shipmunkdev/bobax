import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { OrderProps, BobaProps } from 'types/common/main';
import { bobaList } from 'assets/sampleBobaAPI';
import BobaContainer from 'components/BobaContainer';
import SearchBar from 'components/SearchBar';

const Homepage = (props: OrderProps): JSX.Element => {
  const { order, setOrder } = props;

  const [bobaListx, setBobaListx] = useState<BobaProps[]>(bobaList);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredfunction = (bobaList: BobaProps[], query: string): BobaProps[] => {
    return bobaList.filter((filtered: BobaProps) =>
      filtered.name.toLowerCase().includes(query.toLowerCase()),
    );
  };

  useEffect(() => {
    if (searchQuery) {
      const filterlist = filteredfunction(bobaList, searchQuery);
      if (!filterlist) {
        setBobaListx([]);
      } else {
        setBobaListx(filterlist);
      }
    } else {
      setBobaListx(bobaList);
    }
  }, [searchQuery]);

  return (
    <Container>
      <h1>Boba Drinks Card Content</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BobaContainer order={order} setOrder={setOrder} bobaListx={bobaListx} />
    </Container>
  );
};

export default Homepage;
