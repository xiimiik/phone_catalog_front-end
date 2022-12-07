import React from 'react';
import { Link } from 'react-router-dom';

import s from './ProductCard.module.scss';

import { ProductAction } from '../ProductAction';

type Props = {
  phoneId: string,
  name: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  ram: string,
  image: string,
};

export const ProductCard: React.FC<Props> = ({
  phoneId,
  name,
  fullPrice,
  price,
  screen,
  capacity,
  ram,
  image,
}) => {
  return (
    <article className={s.productCard}>
      <Link to={`/phones/${phoneId}`} className={s.productCard__img}>
        <img src={` https://effulgent-elf-0da1cb.netlify.app/${image}`} alt="appleProduct" />
      </Link>

      <h3
        className={s.productCard__title}
        title={name.toString()}
      >
        <Link to={`/phones/${phoneId}`} className={s.productCard__link}>
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
        <ProductAction />
      </footer>
    </article>
  );
};
