import {
  useEffect,
  useState,
  useCallback,
} from 'react';

import { useSearchParams } from 'react-router-dom';

import { Phone } from '../../types/Phone';
import { getPhones, getPhonesWithLimit } from '../../api/phones';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';
import { SelectParams } from '../SelectParams';
import { Pagination } from '../Pagination';

import s from './Catalog.module.scss';

import { optionsSorting, optionsCount } from '../../utils/optionsParams';

export const Catalog = () => {
  const [phones, setPhones] = useState<Phone[]>();
  const [phonesLength, setPhonesLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const sorting = searchParams.get('sorting') || 'default';
  const quantity = searchParams.get('quantity') || '16';

  const [selectLimit, setSelectLimit] = useState(sorting);
  const [selectSort, setSelectSort] = useState(quantity);
  const [selectOffset, setSelectOffset] = useState(1);

  const [orderSort, setOrderSort] = useState('');
  const [dirSort, setDirSort] = useState('');

  const getPhonesFromServer = useCallback(
    async (
      offset: number,
      limit: string,
      order: string,
      dir: string,
    ) => {
      try {
        setIsLoading(true);
        const length = await getPhones();
        const phonesFromServer
          = await getPhonesWithLimit(offset, limit, order, dir);

        setIsLoading(true);

        setPhones(phonesFromServer.edges);
        setPhonesLength(length.count);
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    }, [phones],
  );

  const setSorting = (order: string, dir: string) => {
    setOrderSort(order);
    setDirSort(dir);
  };

  const setSelect = (sort: string) => {
    switch (sort) {
      case 'ascPrice':
        setSorting('price', 'asc');
        break;

      case 'descPrice':
        setSorting('price', 'desc');
        break;

      case 'ascYear':
        setSorting('new', 'asc');
        break;

      case 'descYear':
        setSorting('new', 'desc');
        break;

      case 'default':
      default:
        setSorting('', '');
    }
  };

  useEffect(() => {
    setSelect(selectSort);
  }, [selectSort]);

  useEffect(() => {
    setSelect(selectSort);

    getPhonesFromServer(
      selectOffset,
      selectLimit,
      orderSort,
      dirSort,
    );
  }, []);

  useEffect(() => {
    getPhonesFromServer(
      selectOffset,
      selectLimit,
      orderSort,
      dirSort,
    );
  }, [selectLimit, selectOffset, orderSort, dirSort]);

  return (
    <div className={s.catalog}>
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
        selectOffset={selectOffset}
        phonesLength={phonesLength}
        selectLimit={Number(selectLimit)}
      />
    </div>
  );
};
