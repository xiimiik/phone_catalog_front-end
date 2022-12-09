import React, { useContext } from 'react';
import { UserContext } from '../../context/Context';
import { CartItem } from '../CartItem';
import s from './CartList.module.scss';

export const CartList: React.FC = () => {
  const { cartItems } = useContext(UserContext);

  return (
    <>
      <div className={s.cartList}>
        {cartItems.map((phone => (
          <CartItem
            key={phone.id}
            phone={phone}
          />
        )))}
      </div>
    </>
  );
};
