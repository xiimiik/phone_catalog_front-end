import React, { useContext } from 'react';
import { UserContext } from '../../context/Context';
import { Phone } from '../../types/Phone';
import s from './CartForm.module.scss';

type Props = {
  cartItems: Phone[],
  isLoading: boolean
};

export const CartForm: React.FC<Props> = ({ cartItems, isLoading }) => {
  const { cartItemsIds, cartItemsNumber } = useContext(UserContext);
  const total = cartItems.reduce((sum, item) => {
    const index = cartItemsIds.findIndex(cartItem => cartItem === item.id);
    const quantity = cartItemsNumber[index];

    return sum + item.price * +quantity;
  }, 0);
  const quantity = cartItemsNumber
    .reduce((sum, number) => sum + Number(number), 0);

  return (
    <form className={s.cartForm}>
      <p className={s.cartForm__price}>
        {isLoading ? (
          '$----'
        ) : (
          `$${total}`
        )}
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
