import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartForm } from '../CartForm';
import { CartList } from '../CartList';

import s from './Cart.module.scss';
import img from '../../assets/img/LeftArrow.svg';
import { UserContext } from '../../context/Context';
import { EmptyChosen } from '../EmptyChosen';

export const Cart: React.FC = () => {
  const { cartItems } = useContext(UserContext);
  const isCartEmpty = cartItems.length === 0;
  const navigate = useNavigate();

  return (
    <div className={s.cart}>
      <button
        onClick={() => navigate(-1)}
        className={s.cart__button}
      >
        <img src={img} alt="arrow" />
        Back
      </button>
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
