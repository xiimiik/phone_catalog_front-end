import {
  useEffect,
  useState,
  useCallback,
} from 'react';

import { Phone } from '../../types/Phone';
import { getPhonesWithLimit } from '../../api/phones';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';
import { SelectParams } from '../SelectParams';
import { Pagination } from '../Pagination';

import s from './Catalog.module.scss';

import { optionsSorting, optionsCount } from '../../utils/optionsParams';
import { Breadcrumbs } from '../Breadcrumbs';

export const Catalog = () => {
  const [phones, setPhones] = useState<Phone[]>();
  const [phonesLength, setPhonesLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [selectLimit, setSelectLimit] = useState(optionsCount[2].value);
  const [selectSort, setSelectSort] = useState(optionsSorting[0].value);
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

  const setSorting = (order: string, dir: string) => {
    setOrderSort(order);
    setDirSort(dir);
  };

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
        setSorting={setSorting}
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
