import { render, screen } from '@testing-library/react';
import SearchIcon from 'components/Icons/SearchIcon';

describe('Search Icon', () => {
  it('renders search icon', () => {
    render(<SearchIcon />);

    const testSearchIcon = screen.getByTestId('test-search-icon');
    expect(testSearchIcon).toBeInTheDocument();
    expect(testSearchIcon).toHaveClass('bi-search');
  });
});
