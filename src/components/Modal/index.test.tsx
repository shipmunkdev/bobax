import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BaseModal from 'components/Modal';

describe('BaseModal', () => {
  it('renders with title when opened', () => {
    const handleClose = jest.fn();
    const modalShow = true;

    render(<BaseModal title='Test Modal Title' modalShow={modalShow} onHide={handleClose} />);

    const { getByText } = within(screen.getByTestId('modal-title'));
    expect(getByText('Test Modal Title')).toBeInTheDocument();
    expect(screen.getByTestId('modal-title')).toBeInTheDocument();
  });

  it('should render close button', () => {
    const handleClose = jest.fn();
    const modalShow = true;

    render(<BaseModal title='Test Modal Title' modalShow={modalShow} onHide={handleClose} />);

    const closeButton = screen.getByTestId('modal-close-button');
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveTextContent('Close');
  });

  it('should call onHide when close button is clicked', () => {
    const handleClose = jest.fn();
    const modalShow = true;

    render(<BaseModal title='Test Modal' modalShow={modalShow} onHide={handleClose} />);

    const closeButton = screen.getByTestId('modal-close-button');
    userEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should render Test Modal Body when modalBody props is passed', () => {
    const handleClose = jest.fn();
    const modalShow = true;

    render(
      <BaseModal
        title='Test Modal'
        modalShow={modalShow}
        onHide={handleClose}
        ModalBody={() => <div>Test Modal Body</div>}
      />,
    );

    const { getByText } = within(screen.getByTestId('modal-body'));
    expect(getByText('Test Modal Body')).toBeInTheDocument();
    expect(screen.getByTestId('modal-body')).toBeInTheDocument();
    expect(screen.getByTestId('modal-body')).toHaveClass('show-grid');
  });
});
