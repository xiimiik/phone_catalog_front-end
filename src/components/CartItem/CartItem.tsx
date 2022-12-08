import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import s from './CartItem.module.scss';

import btn from '../../assets/img/ButtonDelete.svg';
import minus from '../../assets/img/Minus.svg';
import plus from '../../assets/img/Plus.svg';
import { Phone } from '../../types/Phone';
import { UserContext } from '../../context/Context';

type Props = {
  phone: Phone,
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const {
    id,
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

  const handleRemoveButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();

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
      <div className={s.cartItem__info}>
        <button
          onClick={handleRemoveButtonClick}
          className={s.cartItem__deleteButton}
        >
          <img src={btn} alt="button delete" />
        </button>

        <Link to={`/phones/${id}`}>
          <img
            className={s.cartItem__image}
            src={` https://effulgent-elf-0da1cb.netlify.app/${image}`}
            alt={name}
          />
        </Link>

        <h3>
          <Link to={`/phones/${id}`} className={s.cartItem__title}>
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
    </article>
  );
};
