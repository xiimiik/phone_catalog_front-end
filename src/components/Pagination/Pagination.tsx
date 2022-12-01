import React from 'react';
import s from './Pagination.module.scss';
import cn from 'classnames';

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