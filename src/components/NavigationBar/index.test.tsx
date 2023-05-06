import { render, screen } from '@testing-library/react';
import React from 'react';

import NavigationBar from 'components/NavigationBar';

describe('NavigationBar', () => {
    it('renders NavigationBar', () => {
        render(<NavigationBar cartItemsCount={0} />);

        const homeLink = screen.getByText(/Home/i);
        const aboutUsLink = screen.getByText(/About Us/i);
        expect(homeLink).toBeInTheDocument();
        expect(aboutUsLink).toBeInTheDocument();
    });
});
