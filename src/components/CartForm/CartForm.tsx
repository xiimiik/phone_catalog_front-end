import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/Context';
import { ModalWindow } from '../Modal';
import s from './CartForm.module.scss';

export const CartForm: React.FC = () => {
  const { cartItems } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const total = cartItems
    .reduce((sum, { quantity, price }) => sum + price * quantity, 0);
  const totalQuantity = cartItems
    .reduce((sum, { quantity }) => sum + quantity, 0);
  const handleCheckout = () => {
    setIsOpen(true);
  };

  return (
    <form
      className={s.cartForm}
      onSubmit={handleCheckout}
    >
      <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen} />
      <p className={s.cartForm__price}>
        {`$${total}`}
      </p>
      <div className={s.cartForm__items}>
        {`Total for ${totalQuantity} items`}
      </div>
      <button className={s.cartForm__button}>
        Checkout
      </button>
    </form>
  );
};
