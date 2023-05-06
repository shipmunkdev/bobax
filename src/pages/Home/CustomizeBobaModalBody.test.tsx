import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import BobaModalForm from './CustomizeBobaModalBody';

const milkList = {
    '1': {
        name: 'Whole Milk',
        price: 0.0,
    },
    '2': {
        name: 'Almond Milk',
        price: 0.5,
    },
};

const toppingsList = {
    '1': {
        name: 'Boba',
        price: 0.5,
    },
    '2': {
        name: 'Lychee Jelly',
        price: 0.5,
    },
};

const mockSetMilkType = jest.fn();
const mockSetToppingsType = jest.fn();

describe('BobaModalForm', () => {
    it('should render the component without errors', () => {
        render(
            <BobaModalForm
                milkList={milkList}
                toppingsList={toppingsList}
                milkType={'1'}
                toppingsType={{ '1': true, '2': false }}
                setMilkType={mockSetMilkType}
                setToppingsType={mockSetToppingsType}
            />,
        );
    });

    it('should render the quantity field', () => {
        render(
            <BobaModalForm
                milkList={milkList}
                toppingsList={toppingsList}
                milkType={'1'}
                toppingsType={{ '1': true, '2': false }}
                setMilkType={mockSetMilkType}
                setToppingsType={mockSetToppingsType}
            />,
        );
        expect(screen.getByText('Quantity')).toBeInTheDocument();
    });

    it('should render the milk field', () => {
        render(
            <BobaModalForm
                milkList={milkList}
                toppingsList={toppingsList}
                milkType={'1'}
                toppingsType={{ '1': true, '2': false }}
                setMilkType={mockSetMilkType}
                setToppingsType={mockSetToppingsType}
            />,
        );
        expect(screen.getByText('Milk')).toBeInTheDocument();
        expect(screen.getByText('Whole Milk')).toBeInTheDocument();
        expect(screen.getByText('Almond Milk')).toBeInTheDocument();
    });

    it('should render the toppings field', () => {
        render(
            <BobaModalForm
                milkList={milkList}
                toppingsList={toppingsList}
                milkType={'1'}
                toppingsType={{ '1': true, '2': false }}
                setMilkType={mockSetMilkType}
                setToppingsType={mockSetToppingsType}
            />,
        );
        expect(screen.getByText('Toppings (Optional)')).toBeInTheDocument();
        expect(screen.getByText('Boba')).toBeInTheDocument();
        expect(screen.getByText('Lychee Jelly')).toBeInTheDocument();
    });

    it('should set the milk type when a radio button is clicked', () => {
        render(
            <BobaModalForm
                milkList={milkList}
                toppingsList={toppingsList}
                milkType={'1'}
                toppingsType={{ '1': true, '2': false }}
                setMilkType={mockSetMilkType}
                setToppingsType={mockSetToppingsType}
            />,
        );
        const almondMilkRadio = screen.getByLabelText('Almond Milk');
        fireEvent.click(almondMilkRadio);
        expect(mockSetMilkType).toHaveBeenCalledWith('2');
    });
});
