import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../assets/img/Apple.png';
import s from './ProductCard.module.scss';

import { Button } from '../Button';
import { Favorite } from '../Favorite/Favorite';

type Props = {
  name: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  ram: string,
};

export const ProductCard: React.FC<Props> = ({
  name,
  fullPrice,
  price,
  screen,
  capacity,
  ram,
}) => {
  return (
    <article className={s.productCard}>
      <Link to="/item" className={s.productCard__img}>
        <img src={img} alt="appleProduct" />
      </Link>

      <h3 className={s.productCard__title}>
        <Link to="/item" className={s.productCard__link}>
          {`${name} (iMT9G2FS/A)`}
        </Link>
      </h3>

      <div className={s.productCard__price}>
        {`$${price}`}
        <span className={s.productCard__price_oldPrice}>
          {`$${fullPrice}`}
        </span>
      </div>

      <ul className={s.productCard__specs}>
        <li className={s.productCard__info}>
          <h6 className={s.productCard__name}>Screen</h6>
          <strong className={s.productCard__value}>{screen}</strong>
        </li>

        <li className={s.productCard__info}>
          <h6 className={s.productCard__name}>Capacity</h6>
          <strong className={s.productCard__value}>{capacity}</strong>
        </li>

        <li className={s.productCard__info}>
          <h6 className={s.productCard__name}>RAM</h6>
          <strong className={s.productCard__value}>{ram}</strong>
        </li>
      </ul>

      <footer className={s.productCard__action}>
        <div className={s.productCard__btn}>
          <Button />
        </div>

        <Favorite />
      </footer>
    </article>
  );
};
