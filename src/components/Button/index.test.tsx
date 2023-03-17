import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './index';

describe('Button', () => {
  it('renders a button with the given label', () => {
    render(<Button label='Click me' />);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('renders a button with the given variant', () => {
    render(<Button label='Click me' variant='primary' />);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');
  });
  
  it('renders a button with the given variant', () => {
    render(<Button label='Click me' variant='secondary' />);
    expect(screen.getByRole('button')).toHaveClass('btn-secondary');
});

  it('calls the given onClick handler when clicked', () => {
    const onClick = jest.fn();
    render(<Button label='Click me' onClick={onClick} />);
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});