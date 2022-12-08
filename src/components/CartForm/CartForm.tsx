import React from 'react';
import s from './CartForm.module.scss';

type Props = {
  total: number,
  quantity: number,
};

export const CartForm: React.FC<Props> = ({ total, quantity }) => {
  return (
    <form className={s.cartForm}>
      <p className={s.cartForm__price}>
        {`$${total}`}
      </p>
      <div className={s.cartForm__items}>
        {`Total for ${quantity} items`}
      </div>
      <button className={s.cartForm__button}>
        Checkout
      </button>
    </form>
  );
};
