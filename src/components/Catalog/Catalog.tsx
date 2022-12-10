import {
  useEffect,
  useState,
  useCallback,
} from 'react';

import { useSearchParams } from 'react-router-dom';

import { Phone } from '../../types/Phone';
import { getPhonesWithLimit } from '../../api/phones';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';
import { SelectParams } from '../SelectParams';
import { Pagination } from '../Pagination';

import s from './Catalog.module.scss';

import { optionsSorting, optionsCount } from '../../utils/optionsParams';

import { Order } from '../../types/Order';

import { Breadcrumbs } from '../Breadcrumbs';

export const Catalog = () => {
  const [phones, setPhones] = useState<Phone[]>();
  const [phonesLength, setPhonesLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const sorting = searchParams.get('sorting') || 'default';
  const quantity = searchParams.get('quantity') || '16';
  const page = searchParams.get('page') || '1';

  const [selectSort, setSelectSort] = useState(sorting);
  const [selectLimit, setSelectLimit] = useState(quantity);
  const [selectOffset, setSelectOffset] = useState(page);

  const [orderSort, setOrderSort] = useState('');
  const [dirSort, setDirSort] = useState('');

  const setSelect = (sort: string) => {
    switch (sort) {
      case Order.ascPrice:
        setOrderSort('price');
        setDirSort('asc');
        break;

      case Order.descPrice:
        setOrderSort('price');
        setDirSort('desc');
        break;

      case Order.ascYear:
        setOrderSort('year');
        setDirSort('asc');
        break;

      case Order.descYear:
        setOrderSort('year');
        setDirSort('desc');
        break;

      case Order.default:
      default:
        setOrderSort('');
        setDirSort('');
    }
  };

  const getPhonesFromServer = useCallback(
    async (
      offset: number,
      limit: string,
      order: string,
      dir: string,
    ) => {
      try {
        setIsLoading(true);

        const phonesFromServer
          = await getPhonesWithLimit(offset, limit, order, dir);

        setPhones(phonesFromServer.edges);
        setPhonesLength(phonesFromServer.count);
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    }, [phones],
  );

  useEffect(() => {
    setSelect(sorting);
  }, [selectSort]);

  useEffect(() => {
    setSelect(sorting);

    searchParams.set('sorting', optionsSorting[0].value);
    searchParams.set('quantity', optionsCount[2].value);
    searchParams.set('page', '1');
    setSearchParams(searchParams);

    getPhonesFromServer(
      Number(selectOffset),
      selectLimit,
      orderSort,
      dirSort,
    );
  }, [selectLimit, selectOffset, orderSort, dirSort]);

  useEffect(() => {
    searchParams.set('sorting', selectSort);
    searchParams.set('quantity', selectLimit);
    searchParams.set('page', String(selectOffset));
    setSearchParams(searchParams);
  }, [searchParams]);

  return (
    <div className={s.catalog}>
      <Breadcrumbs
        breads={[
          { title: 'home', path: '/' },
          { title: 'Phones', path: '/phones' },
        ]}
      />
      <h1 className={s.catalog__title}>Mobile phones</h1>

      <div className={s.catalog__count}>
        {phonesLength}
        {' '}
        models
      </div>

      <SelectParams
        optionsSorting={optionsSorting}
        optionsCount={optionsCount}
        selectLimit={selectLimit}
        selectSort={selectSort}
        setSelectLimit={setSelectLimit}
        setSelectSort={setSelectSort}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div className={s.catalog__list}>
          {phones?.map(phone => {
            return (
              <ProductCard
                key={phone.id}
                phone={phone}
              />
            );
          })}
        </div>
      )}

      <Pagination
        setSelectOffset={setSelectOffset}
        selectOffset={Number(selectOffset)}
        phonesLength={phonesLength}
        selectLimit={Number(selectLimit)}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  );
};
