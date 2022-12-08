import React from 'react';
import { Phone } from '../../types/Phone';
import { CartItem } from '../CartItem';
import s from './CartList.module.scss';

type Props = {
  cartItems: Phone[],
  isLoading: boolean,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CartList: React.FC<Props> = ({ cartItems, isLoading }) => {
  return (
    <>
      <div className={s.cartList}>
        {cartItems.map((phone => (
          <CartItem key={phone.id} phone={phone} />
        )))}
      </div>
    </>
  );
};
