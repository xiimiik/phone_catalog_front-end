import React from 'react';
import { CartItem } from '../CartItem';
import s from './CartList.module.scss';

type Props = {
  phoneId: string,
};

export const CartList: React.FC<Props> = ({ phoneId }) => {
  return (
    <div className={s.cartList}>
      <CartItem phoneId={phoneId} />
      <CartItem phoneId={phoneId} />
      <CartItem phoneId={phoneId} />
    </div>
  );
};
