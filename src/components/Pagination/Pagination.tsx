import React, { useState } from 'react';
import cn from 'classnames';
import s from './Pagination.module.scss';

type Props = {
  selectOffset: number,
  phonesLength: number,
  selectLimit: number,
  setSelectOffset: (offset: number) => void,
};

export const Pagination: React.FC<Props> = ({
  selectOffset,
  phonesLength,
  selectLimit,
  setSelectOffset,
}) => {
  const [currentPage] = useState(selectOffset);

  const changeCountOfPages = (countOfItems: number) => {
    const pages = [];
    const countOfButtons = Math.ceil(countOfItems / selectLimit);

    for (let i = 0; i < countOfButtons; i += 1) {
      pages.push(i + 1);
    }

    return pages;
  };

  const lastPage = changeCountOfPages(phonesLength).length;

  const checkPage = (page: number) => {
    return currentPage === page;
  };

  return (
    <ul className={s.pagination}>
      <li className={s.pagination__item}>
        <button
          onClick={() => !checkPage(1) && setSelectOffset(currentPage - 1)}
          disabled={checkPage(1)}
          className={s.pagination__link}
        >
          &#60;
        </button>
      </li>

      {changeCountOfPages(phonesLength).map(page => (
        <li key={page} className={s.pagination__item}>
          <button
            onClick={() => setSelectOffset(page)}
            className={cn(s.pagination__link, {
              [s.pagination__link_active]: selectOffset === page,
            })}
          >
            {page}
          </button>
        </li>
      ))}

      <li className={s.pagination__item}>
        <button
          onClick={() => (
            !checkPage(lastPage) && setSelectOffset(currentPage + 1)
          )}
          disabled={checkPage(lastPage)}
          className={s.pagination__link}
        >
          &#62;
        </button>
      </li>
    </ul>
  );
};
