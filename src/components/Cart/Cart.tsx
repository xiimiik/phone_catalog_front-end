import React, { useContext } from 'react';
import { CartForm } from '../CartForm';
import { CartList } from '../CartList';

import s from './Cart.module.scss';
import img from '../../assets/img/LeftArrow.svg';
import { UserContext } from '../../context/Context';
import { EmptyChosen } from '../EmptyChosen';

export const Cart: React.FC = () => {
  const { cartItems } = useContext(UserContext);
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className={s.cart}>
      <a href="/" className={s.cart__button}>
        <img src={img} alt="arrow" />
        Back
      </a>
      <h1 className={s.cart__title}>Cart</h1>

      <div className={s.cart__content}>
        {isCartEmpty ? (
          <EmptyChosen
            group="products"
            actionText="add"
          />
        ) : (
          <>
            <CartList />
            <CartForm />
          </>
        )}
      </div>
    </div>
  );
};
