import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import BinocularIcon from './BinocularIcon';

export interface SearchBarProps {
  searchLabel: string;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

const SearchBar = ({ searchLabel, searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <InputGroup className='mb-3'>
      <InputGroup.Text id='basic-addon1'>
        <BinocularIcon />
      </InputGroup.Text>
      <Form.Control
        data-testid='test-search-bar'
        type='text'
        placeholder={searchLabel}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
