import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import s from './CartItem.module.scss';

import btn from '../../assets/img/ButtonDelete.svg';
import minus from '../../assets/img/Minus.svg';
import plus from '../../assets/img/Plus.svg';
import { UserContext } from '../../context/Context';
import { PhoneWithQuantity } from '../../types/PhoneWithQuantity';

type Props = {
  phone: PhoneWithQuantity,
};

enum Operation {
  Increment = 1,
  Decrement = -1,
}

export const CartItem: React.FC<Props> = ({ phone }) => {
  const {
    id,
    phoneId,
    image,
    name,
    price,
    quantity,
  } = phone;
  const { cartItems, setCartItems } = useContext(UserContext);
  const index = cartItems.findIndex(item => item.id === id);

  const handleRemoveButtonClick = () => {
    if (index > -1) {
      const filteredCartItems = cartItems.filter((_item, i) => (
        i !== index
      ));

      setCartItems(filteredCartItems);
    }
  };

  const changeQuantity = (operation: Operation) => {
    const newCartItems = [...cartItems];
    const itemIndex = cartItems.findIndex(item => item.id === id);

    if (index > -1) {
      const newQuantity = cartItems[itemIndex].quantity + operation;
      const updatedItem = {
        ...cartItems[itemIndex],
        quantity: newQuantity >= 1 ? newQuantity : 1,
      };

      newCartItems.splice(index, 1, updatedItem);
    }

    setCartItems(newCartItems);
  };

  const addOne = () => {
    changeQuantity(Operation.Increment);
  };

  const removeOne = () => {
    changeQuantity(Operation.Decrement);
  };

  return (
    <article className={s.cartItem}>
      <div className={s.cartItem__content}>
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
            <p>{quantity}</p>
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
