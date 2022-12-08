import React, { useContext, useEffect, useState } from 'react';

import cn from 'classnames';
import s from './Button.module.scss';
import { UserContext } from '../../context/Context';

type Props = {
  id?: string
};

export const Button: React.FC<Props> = ({ id }) => {
  const [select, setSelect] = useState(false);
  const {
    cartItemsIds,
    setCartItemsIds,
    cartItemsNumber,
    setCartItemsNumber,
  } = useContext(UserContext);

  const isItemInCart = cartItemsIds.find(itemId => itemId === id);

  const handleCartButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!isItemInCart) {
      setCartItemsIds([...cartItemsIds, id] as string[]);
      setCartItemsNumber([...cartItemsNumber, '1']);
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
