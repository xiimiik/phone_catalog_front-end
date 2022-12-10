import React, { useContext, useEffect, useState } from 'react';

import cn from 'classnames';
import s from './Button.module.scss';
import { UserContext } from '../../context/Context';
import { Phone } from '../../types/Phone';
import { PhoneWithQuantity } from '../../types/PhoneWithQuantity';

type Props = {
  phone?: Phone,
};

export const Button: React.FC<Props> = ({ phone }) => {
  const [select, setSelect] = useState(false);
  const {
    cartItems,
    setCartItems,
  } = useContext(UserContext);

  const isItemInCart = cartItems.find(item => item.id === phone?.id);

  const handleCartButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!isItemInCart) {
      setCartItems(
        [...cartItems, { ...phone, quantity: 1 }] as PhoneWithQuantity[],
      );
    }

    setSelect(true);
  };

  useEffect(() => {
    if (isItemInCart) {
      setSelect(true);
    }
  }, []);

  return (
    <button
      onClick={handleCartButtonClick}
      className={cn(s.btn, {
        [s.btn_selected]: select,
      })}
    >
      { select ? 'Added' : 'Add to cart' }
    </button>
  );
};
