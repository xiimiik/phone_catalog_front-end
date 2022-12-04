import React from 'react';
import s from './CartForm.module.scss';

export const CartForm: React.FC = () => {
  const price = '$2999';

  return (
    <form className={s.cartForm}>
      <p className={s.cartForm__price}>{price}</p>
      <div className={s.cartForm__items}>Total for 3 items</div>
      <button className={s.cartForm__button}>
        Checkout
      </button>
    </form>
  );
};
