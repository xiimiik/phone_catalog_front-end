import React from "react";
import { Link } from "react-router-dom";
import s from './CartItem.module.scss'

import img from '../../assets/img/Apple.png'
import btn from '../../assets/img/ButtonDelete.svg'
import minus from '../../assets/img/Minus.svg'
import plus from '../../assets/img/Plus.svg'

export const CartItem: React.FC = () => {
  let count = 1;

  return (
    <article className={s.cartItem}>
      <div className={s.cartItem__info}>
        <button className={s.cartItem__deleteButton}>
          <img src={btn} alt="button delete" />
        </button>
      
        <Link to="/item">
          <img className={s.cartItem__image} src={img} alt="appleProduct" />
        </Link>

        <h3>
          <Link to="/item" className={s.cartItem__title}>
            Apple iPhone 14
            Pro 128GB Silver (MQ023)
          </Link>
        </h3>
      </div>

      <div className={s.cartItem__wrapper}>
        <div className={s.cartItem__counter}>
          <button className={s.cartItem__button}>
            <img src={minus} alt="Minus button" />
          </button>
          <p>{count}</p>
          <button className={s.cartItem__button}>
            <img src={plus} alt="Plus button" />
          </button>
        </div>

        <div className={s.cartItem__price}>
        $999
        </div>
      </div>
    </article>
  )
}