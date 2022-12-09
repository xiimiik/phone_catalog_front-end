import React from 'react';
import { Phone } from '../../types/Phone';
import { CartItem } from '../CartItem';
import s from './CartList.module.scss';

type Props = {
  cartItems: Phone[],
  isDeleting: boolean,
};

export const CartList: React.FC<Props> = ({
  cartItems,
  isDeleting,
}) => {
  return (
    <>
      <div className={s.cartList}>
        {cartItems.map((phone => (
          <CartItem
            key={phone.id}
            phone={phone}
            isDeleting={isDeleting}
          />
        )))}
      </div>
    </>
  );
};
