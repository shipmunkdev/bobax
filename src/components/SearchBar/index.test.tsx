import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from 'components/SearchBar';

describe('SearchBar', () => {
  it('renders search bar', () => {
    const setSearchQuery = jest.fn();
    render(<SearchBar searchLabel='Search' searchQuery='' setSearchQuery={setSearchQuery} />);

    const searchInput = screen.getByTestId('test-search-bar');
    expect(searchInput).toBeInTheDocument();
  });

  it('calls setSearchQuery on input change', () => {
    const setSearchQuery = jest.fn();
    const searchQuery = '';
    render(
      <SearchBar searchLabel='Search' searchQuery={searchQuery} setSearchQuery={setSearchQuery} />,
    );

    const searchInput = screen.getByTestId('test-search-bar');
    fireEvent.change(searchInput, { target: { value: 'Hello' } });
    expect(setSearchQuery).toHaveBeenCalledWith('Hello');
  });
});
