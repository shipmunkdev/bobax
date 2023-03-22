import { render, screen } from '@testing-library/react';
import ShoppingCartIcon from 'components/Icons/ShoppingCartIcon';

describe('Shopping Cart Icon', () => {
  it('renders shopping cart icon', () => {
    render(<ShoppingCartIcon />);

    const testCartIcon = screen.getByTestId('test-cart-icon');
    expect(testCartIcon).toBeInTheDocument();
    expect(testCartIcon).toHaveClass('bi-cart');
  });
});
