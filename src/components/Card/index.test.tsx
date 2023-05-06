import { render, screen, fireEvent } from '@testing-library/react';

import BobaCard from './index';

const sampleBoba = {
    id: 'test-1',
    name: 'Test Milk Tea',
    price: 4.99,
    imageLink: 'https://example.com/milk-tea.jpg',
    description: 'A test boba drink with milk tea and tapioca pearls.',
    defaultOptions: {
        milk: 'Whole Milk',
        toppings: [{ name: 'Boba', price: 0.5 }],
    },
};

describe('BobaCard', () => {
    it('renders the product name and price', () => {
        const setOrderMock = jest.fn();
        const setModalMock = jest.fn();
        const setBobaInfoModalMock = jest.fn();

        render(
            <BobaCard
                order={[]}
                setOrder={() => setOrderMock}
                product={sampleBoba}
                setModalShow={() => setModalMock}
                setCustomizationModal={() => setBobaInfoModalMock}
            />,
        );
        expect(screen.getByText(sampleBoba.name)).toBeInTheDocument();
        expect(screen.getByText(`$${sampleBoba.price}`)).toBeInTheDocument();
    });

    it('renders the product description', () => {
        const setOrderMock = jest.fn();
        const setModalMock = jest.fn();
        const setBobaInfoModalMock = jest.fn();
        render(
            <BobaCard
                order={[]}
                setOrder={() => setOrderMock}
                product={sampleBoba}
                setModalShow={() => setModalMock}
                setCustomizationModal={() => setBobaInfoModalMock}
            />,
        );
        expect(screen.getByText(sampleBoba.description)).toBeInTheDocument();
    });

    it('calls the onClick function when the "Add to cart" button is clicked', () => {
        const setOrderMock = jest.fn();
        const setModalMock = jest.fn();
        const setBobaInfoModalMock = jest.fn();
        render(
            <BobaCard
                order={[]}
                setOrder={setOrderMock}
                product={sampleBoba}
                setModalShow={() => setModalMock}
                setCustomizationModal={() => setBobaInfoModalMock}
            />,
        );

        const addToCartButton = screen.getByText('Add to cart');
        fireEvent.click(addToCartButton);
        expect(setOrderMock).toHaveBeenCalledWith([sampleBoba]);
    });

    it('adds product to cart when "Add to cart" button is clicked', () => {
        const setOrderMock = jest.fn();
        const setModalMock = jest.fn();
        const setBobaInfoModalMock = jest.fn();
        render(
            <BobaCard
                order={[]}
                setOrder={setOrderMock}
                product={sampleBoba}
                setModalShow={() => setModalMock}
                setCustomizationModal={() => setBobaInfoModalMock}
            />,
        );

        fireEvent.click(screen.getByText('Add to cart'));
        expect(setOrderMock).toHaveBeenCalledWith([sampleBoba]);
    });
});
