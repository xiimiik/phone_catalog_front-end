import React from 'react';
import { CartItem } from '../CartItem';
import s from './CartList.module.scss';

export const CartList: React.FC = () => {
  return (
    <div className={s.cartList}>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};
