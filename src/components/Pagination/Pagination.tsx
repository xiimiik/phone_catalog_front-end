import React from 'react';
import cn from 'classnames';
import s from './Pagination.module.scss';

export const Pagination: React.FC = () => {
  return (
    <ul className={s.pagination}>
      <li className={s.pagination__item}>
        <button
          className={s.pagination__link}
        >
          &#60;
        </button>
      </li>

      <li className={s.pagination__item}>
        <button
          className={s.pagination__link}
        >
          1
        </button>
      </li>

      <li className={s.pagination__item}>
        <button
          className={cn(s.pagination__link, s.pagination__link_active)}
        >
          2
        </button>
      </li>

      <li className={s.pagination__item}>
        <button
          className={s.pagination__link}
        >
          &#62;
        </button>
      </li>
    </ul>
  );
};
