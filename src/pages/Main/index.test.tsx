import { render, screen } from '@testing-library/react';

import Main from './index';

describe('Main', () => {
    it('should render the navigation bar', () => {
        render(<Main />);
        expect(screen.getByTestId('navigation-bar')).toBeInTheDocument();
    });
});
