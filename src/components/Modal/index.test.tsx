import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BaseModal from 'components/Modal';

describe('BaseModal', () => {
  it('renders with title when opened', () => {
    const handleClose = jest.fn();
    const modalShow = true;

    const { getByText } = render(
      <BaseModal title='Test Modal Title' modalShow={modalShow} onHide={handleClose} />,
    );

    expect(getByText('Test Modal Title')).toBeInTheDocument();
  });

  it('should render close button', () => {
    const handleClose = jest.fn();
    const modalShow = true;

    render(<BaseModal title='Test Modal Title' modalShow={modalShow} onHide={handleClose} />);

    const closeButton = screen.getByTestId('modal-close-button');
    expect(closeButton).toBeInTheDocument();
  });

  it('should call onHide when close button is clicked', () => {
    const handleClose = jest.fn();
    const modalShow = true;

    render(<BaseModal title='Test Modal' modalShow={modalShow} onHide={handleClose} />);

    const closeButton = screen.getByTestId('modal-close-button');
    userEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
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

    const testModalBody = screen.getByTestId('modal-body');
    expect(testModalBody.textContent).toBe('Test Modal Body');
  });
});
