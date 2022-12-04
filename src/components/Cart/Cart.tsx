import React from 'react';
import { CartForm } from '../CartForm';
import { CartList } from '../CartList';

import s from './Cart.module.scss';
import img from '../../assets/img/LeftArrow.svg';

export const Cart: React.FC = () => {
  return (
    <div className={s.cart}>
      <a href="/" className={s.cart__button}>
        <img src={img} alt="arrow" />
        Back
      </a>
      <h1 className={s.cart__title}>Cart</h1>

      <div className={s.cart__content}>
        <CartList />
        <CartForm />
      </div>
    </div>
  );
};
