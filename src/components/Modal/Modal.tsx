/* eslint-disable max-len */
import React, { useContext } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import s from './Modal.module.scss';
import sButton from '../Button/Button.module.scss';
import { UserContext } from '../../context/Context';

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const ModalWindow: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { setCartItems } = useContext(UserContext);
  const handleClearButton = () => {
    setCartItems([]);
    setIsOpen(false);
    navigate('/');
  };

  const handleCloseButton = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      className={s.modal}
      contentLabel="Shopping Cart"
      onRequestClose={handleCloseButton}
      ariaHideApp={false}
    >
      <div className={s.modal__header}>
        <h2 className={s.modal__title}>Shopping Cart</h2>
        <button onClick={handleCloseButton}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.47157 1.4714C9.73192 1.21105 9.73192 0.78894 9.47157 0.52859C9.21122 0.268241 8.78911 0.268241 8.52876 0.52859L5.00016 4.05719L1.47157 0.52859C1.21122 0.268241 0.789108 0.268241 0.528758 0.52859C0.268409 0.78894 0.268409 1.21105 0.528758 1.4714L4.05735 4.99999L0.528758 8.52859C0.268409 8.78894 0.268409 9.21105 0.528758 9.4714C0.789108 9.73175 1.21122 9.73175 1.47157 9.4714L5.00016 5.9428L8.52876 9.4714C8.78911 9.73175 9.21122 9.73175 9.47157 9.4714C9.73192 9.21105 9.73192 8.78894 9.47157 8.52859L5.94297 4.99999L9.47157 1.4714Z" fill="#0F0F11" />
          </svg>
        </button>
      </div>
      <p className={s.modal__text}>
        Checkout is not implemented yet. Do you want to clear the Cart?
      </p>
      <div className={s.modal__buttons}>
        <button
          className={`${sButton.btn} ${s.button}`}
          onClick={handleCloseButton}
        >
          Close
        </button>
        <button
          className={`${sButton.btn} ${s.button}`}
          onClick={handleClearButton}
        >
          Clear the cart
        </button>
      </div>
    </Modal>
  );
};
