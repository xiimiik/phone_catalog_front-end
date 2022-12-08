import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import s from './CartItem.module.scss';

import btn from '../../assets/img/ButtonDelete.svg';
import minus from '../../assets/img/Minus.svg';
import plus from '../../assets/img/Plus.svg';
import { Phone } from '../../types/Phone';
import { UserContext } from '../../context/Context';

type Props = {
  phone: Phone,
  isDeleting: boolean;
};

export const CartItem: React.FC<Props> = ({ phone, isDeleting }) => {
  const {
    id,
    phoneId,
    image,
    name,
    price,
  } = phone;
  const {
    cartItemsIds,
    setCartItemsIds,
    cartItemsNumber,
    setCartItemsNumber,
  } = useContext(UserContext);
  const index = cartItemsIds.findIndex(itemId => itemId === id);
  const [idToDelete, setIdToDelete] = useState('0');

  const handleRemoveButtonClick = () => {
    setIdToDelete(id);

    if (index > -1) {
      const filteredCartItemsIds = cartItemsIds.filter((_itemId, i) => (
        i !== index
      ));
      const filteredCartItemsNumber = cartItemsNumber.filter((_itemId, i) => (
        i !== index
      ));

      setCartItemsIds(filteredCartItemsIds);
      setCartItemsNumber(filteredCartItemsNumber);
    }
  };

  const addOne = () => {
    const newCartItemsNumber = [...cartItemsNumber];

    if (index > -1) {
      const newNumber = +cartItemsNumber[index] + 1;

      newCartItemsNumber.splice(index, 1, newNumber.toString());
    }

    setCartItemsNumber(newCartItemsNumber);
  };

  const removeOne = () => {
    const newCartItemsNumber = [...cartItemsNumber];

    if (index > -1) {
      if (+cartItemsNumber[index] > 0) {
        const newNumber = +cartItemsNumber[index] - 1;

        newCartItemsNumber.splice(index, 1, newNumber.toString());
      }
    }

    setCartItemsNumber(newCartItemsNumber);
  };

  return (
    <article className={s.cartItem}>
      {isDeleting && idToDelete === id && (
        <div className={s.cartItem__loader} />
      )}

      <div className={cn(s.cartItem__content, {
        [s.cartItem__content__opacity_50]: isDeleting && idToDelete === id,
      })}
      >
        <div className={s.cartItem__info}>
          <button
            onClick={handleRemoveButtonClick}
            className={s.cartItem__deleteButton}
          >
            <img src={btn} alt="button delete" />
          </button>

          <Link to={`/phones/${phoneId}`}>
            <img
              className={s.cartItem__image}
              src={` https://effulgent-elf-0da1cb.netlify.app/${image}`}
              alt={name}
            />
          </Link>

          <h3>
            <Link to={`/phones/${phoneId}`} className={s.cartItem__title}>
              {name}
            </Link>
          </h3>
        </div>

        <div className={s.cartItem__wrapper}>
          <div className={s.cartItem__counter}>
            <button
              onClick={removeOne}
              className={s.cartItem__button}
            >
              <img src={minus} alt="Minus button" />
            </button>
            <p>{cartItemsNumber[index]}</p>
            <button
              onClick={addOne}
              className={s.cartItem__button}
            >
              <img src={plus} alt="Plus button" />
            </button>
          </div>

          <div className={s.cartItem__price}>
            {`$${price}`}
          </div>
        </div>
      </div>
    </article>
  );
};
