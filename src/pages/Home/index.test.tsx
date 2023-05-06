/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import useApi from 'hooks/API';

import Homepage from './index';

jest.mock('hooks/API');

const mockData = [
    {
        id: '1',
        name: 'Jasmine Green Tea',
        description: 'Jasmine green tea brewed fresh every day',
        price: 3.99,
        imageLink:
            '<https://images.unsplash.com/photo-1542744092-6aef3c8f2f19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGdyZWVuJTIwdGVhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60>',
    },
    {
        id: '2',
        name: 'Classic Milk Tea',
        description: 'Classic milk tea with tapioca pearls',
        price: 4.99,
        imageLink:
            '<https://images.unsplash.com/photo-1602089759145-6c3c41c3e7f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60>',
    },
];

describe('Homepage', () => {
    beforeEach(() => {
        useApi.mockReturnValue({
            data: mockData,
            error: {},
            loading: false,
        });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render a loading spinner on initial render', () => {
        useApi.mockReturnValue({
            data: [],
            error: {},
            loading: true,
        });

        render(<Homepage order={[]} setOrder={() => {}} />);

        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    });

    it('should render an error message if there is an error in API call', () => {
        useApi.mockReturnValue({
            data: [],
            error: {
                status: 400,
                message: 'Bad Request',
            },
            loading: false,
        });

        render(<Homepage order={[]} setOrder={() => {}} />);

        expect(screen.getByText('400 Bad Request')).toBeInTheDocument();
    });

    it('should render a list of boba drinks', () => {
        render(<Homepage order={[]} setOrder={() => {}} />);

        expect(screen.getByText('Jasmine Green Tea')).toBeInTheDocument();
        expect(screen.getByText('Classic Milk Tea')).toBeInTheDocument();
    });

    it('should open the customize modal when a drink is clicked', () => {
        render(<Homepage order={[]} setOrder={() => {}} />);

        const jasmineGreenTea = screen.getByText('Jasmine Green Tea');
        fireEvent.click(jasmineGreenTea);

        expect(screen.getByText('Jasmine Green Tea')).toBeInTheDocument();
        expect(screen.getByText('Jasmine green tea brewed fresh every day')).toBeInTheDocument();
    });
});
