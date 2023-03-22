import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCart from 'components/ShoppingCart';

describe('ShoppingCart', () => {
  it('renders ShoppingCart component', () => {
    render(<ShoppingCart cartItemsCount={0} />);

    const testShoppingCart = screen.getByTestId('test-shopping-cart');
    expect(testShoppingCart).toBeInTheDocument();

    const testCartIcon = screen.getByTestId('test-cart-icon');
    expect(testCartIcon).toBeInTheDocument();
  });

  it('renders correct number in badge', () => {
    render(<ShoppingCart cartItemsCount={3} />);

    const testShoppingCart = screen.getByTestId('test-shopping-cart');
    expect(testShoppingCart).toBeInTheDocument();
    expect(testShoppingCart).toHaveTextContent('3');
  });
});
