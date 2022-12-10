import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './Pagination.module.scss';

type Props = {
  selectOffset: number,
  phonesLength: number,
  selectLimit: number,
  setSelectOffset: (offset: string) => void,
  searchParams: URLSearchParams,
  setSearchParams: (page: URLSearchParams) => void,
};

export const Pagination: React.FC<Props> = ({
  selectOffset,
  phonesLength,
  selectLimit,
  setSelectOffset,
  searchParams,
  setSearchParams,
}) => {
  const [currentPage, setCurrentPage] = useState(selectOffset);

  const getPages = (countOfItems: number) => {
    const pages = [];
    const countOfButtons = Math.ceil(countOfItems / selectLimit);

    for (let i = 0; i < countOfButtons; i += 1) {
      pages.push(i + 1);
    }

    return pages;
  };

  const lastPage = getPages(phonesLength).length;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [currentPage]);

  useEffect(() => {
    searchParams.set('page', String(currentPage));
    setSearchParams(searchParams);
  }, [searchParams]);

  if (currentPage > getPages(phonesLength).length
    && getPages(phonesLength).length !== 0) {
    setCurrentPage(lastPage);
    setSelectOffset(String(lastPage));
    searchParams.set('page', String(lastPage));
    setSearchParams(searchParams);
  }

  const checkPage = (page: number) => {
    return currentPage === page;
  };

  const setPage = (page: number) => {
    setSelectOffset(String(page));
    setCurrentPage(page);
    searchParams.set('page', String(page));
    setSearchParams(searchParams);
  };

  return (
    <div className={s.pagination}>
      <ul className={s.pagination__list}>
        <li className={s.pagination__item}>
          <button
            onClick={() => {
              if (!checkPage(1)) {
                setPage(currentPage - 1);
              }
            }}
            disabled={checkPage(1)}
            className={s.pagination__link}
          >
            &#60;
          </button>
        </li>

        {getPages(phonesLength).map(page => (
          <li key={page} className={s.pagination__item}>
            <button
              onClick={() => setPage(page)}
              disabled={checkPage(page)}
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
            onClick={() => {
              if (!checkPage(lastPage)) {
                setPage(currentPage + 1);
              }
            }}
            disabled={checkPage(lastPage)}
            className={s.pagination__link}
          >
            &#62;
          </button>
        </li>
      </ul>
    </div>
  );
};
