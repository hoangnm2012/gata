import React, { useState, useEffect } from 'react';
import { bool, func, element, string, oneOfType, array, oneOf } from 'prop-types';

import isEqual from 'lodash.isequal';
import isNil from 'lodash.isnil';
import classNames from 'classnames';
import s from './Modal.module.css';

/* --------------------------------------
  Example Usage:
    - For Simple Modal with the default size "md"
    <Modal
      title="Medium Size by default"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <p>{sampleText}</p>
    </Modal>

    - For Advanced Modal: with center modal, custom-modal class, Header & Footer
    <Modal
      className="custom-modal"
      title="Center modal vertically"
      isOpen={isOpenCentered}
      onClose={() => setIsOpenCentered(false)}
      centered
      header={Header()}
      footer={Footer()}
    >
      <p>{sampleText}</p>
    </Modal>
-------------------------------------- */
function Modal({
  isOpen,
  onClose,
  children,
  header,
  footer,
  title,
  withCloseButton = true,
  centered = false,
  size,
  className
}) {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const modalHeaderProps = { header, title, withCloseButton };

  useEffect(() => {
    setModalIsOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setModalIsOpen(false);
    onClose && onClose();
  };

  const clickOverlay = (e) => {
    isEqual(e.target.className, s.modal) && closeModal();
  };

  const handleClickContent = e => {
    e.stopPropagation();
  };

  const modalClass = classNames(s.modal, { [s.hidden]: !modalIsOpen });
  const modalContentClass = classNames(s.modalContent, size ? s[size] : '');

  return (
    <div aria-labelledby="col-modal" role='dialog' className={className}>
      <div data-role="modal-overlay" className={modalClass} data-centered={centered || undefined} onClick={clickOverlay}>
        <div className={modalContentClass} onClick={handleClickContent} aria-describedby="col-modal" data-role="modal-content">
          <ModalHeader onClose={closeModal} {...modalHeaderProps} />
          <div data-role="modal-body" className={s.modalBody}>{children}</div>
          {!isNil(footer) && <div data-role="modal-footer" className={s.modalFooter}>{footer}</div>}
        </div>
      </div>
    </div>
  );
}

export const ModalHeader = ({ title, withCloseButton, header, onClose }) => {
  if (!isNil(header)) return <div data-role="modal-header" className={s.modalHeader}>{header}</div>;

  const hasDefaultHeader = !!title && withCloseButton;

  return (
    <>
      {hasDefaultHeader && (
        <div className={s.modalHeader} data-role="modal-header">
          {title && <h2>{title}</h2>}
          {withCloseButton && <span role="button" className={s.btnClose} onClick={onClose} />}
        </div>
      )}
    </>
  )
};

Modal.propTypes = {
  isOpen: bool,
  onClose: func,
  children: oneOfType([element, string, array]),
  header: element,
  footer: element,
  toggleButton: element,
  title: string,
  withCloseButton: bool,
  centered: bool,
  size: oneOfType([
    oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    oneOf([null, undefined]),
  ]),
  className: string
};

Modal.defaultProps = {
  isOpen: false,
  header: null,
  footer: null,
  toggleButton: null,
  className: '',
  withCloseButton: true,
};

export default Modal;
