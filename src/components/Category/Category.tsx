import React from 'react';
import { Link } from 'react-router-dom';
import s from './Category.module.scss';

type Props = {
  categoryName: string,
  img: string,
  categoryTitle: string,
  quantity: number,
};

export const Category: React.FC<Props> = ({
  categoryName,
  img,
  categoryTitle,
  quantity,
}) => {
  return (
    <li className={s.category}>
      <div className={s.category__content}>
        <Link
          to={`/${categoryName}`}
          className={s.category__image_container}
        >
          <img
            src={img}
            className={s.category__image}
            alt={categoryName}
          />
        </Link>

        <Link
          to={`/${categoryName}`}
          className={s.category__title}
        >
          {categoryTitle}
        </Link>

        <span className={s.category__quantity}>
          {`${quantity} models`}
        </span>
      </div>
    </li>
  );
};
