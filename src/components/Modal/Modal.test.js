import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import { ModalHeader } from './Modal';

const defaultProps = {
  isOpen: true,
  onClose: () => {},
  title: 'test-title',
};

describe('Modal Component', () => {
  it('renders with a title and content', () => {
    const { getByText } = render(
      <Modal isOpen={true} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    expect(getByText('Test Modal')).toBeInTheDocument();
    expect(getByText('Modal content')).toBeInTheDocument();
  });

  it('sets data-centered attribute when centered prop is passed', () => {
    const { container, rerender } = render(<Modal {...defaultProps} centered />);
    expect(container.querySelector(`div[data-role="modal-overlay"]`)).toHaveAttribute('data-centered');

    rerender(<Modal {...defaultProps} centered={false} />);
    expect(container.querySelector(`div[data-role="modal-overlay"]`)).not.toHaveAttribute('data-centered');
  });

  it('renders given title', () => {
    const { container } = render(<Modal {...defaultProps} title="test-title" />);
    expect(container.querySelector(`div[data-role="modal-overlay"]`)).toHaveTextContent('test-title');
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    const { getByRole } = render(
      <Modal isOpen={true} title="Test Modal" onClose={onClose}>
        <p>Modal content</p>
      </Modal>
    );

    fireEvent.click(getByRole('button'));
    expect(onClose).toHaveBeenCalled();
  });

  it('renders with a custom class name', () => {
    const { container } = render(
      <Modal isOpen={true} title="Test Modal" className="custom-modal">
        <p>Modal content</p>
      </Modal>
    );

    expect(container.firstChild).toHaveClass('custom-modal');
  });

  it('exposes compound components', () => {
    expect(Modal).toBe(Modal);
    expect(ModalHeader).toBe(ModalHeader);
  });
});