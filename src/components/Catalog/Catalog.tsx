import {
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';

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
  const [selectSort, setSelectSort] = useState(optionsSorting[0].value);
  const [selectLimit, setSelectLimit] = useState(optionsCount[2].value);
  const [selectOffset, setSelectOffset] = useState(1);

  const sortPhones = (sortBy: string) => {
    return phones?.sort((phone1: Phone, phone2: Phone): number => {
      switch (sortBy) {
        case 'newest':
          return phone1.year - phone2.year;

        case 'oldest':
          return phone2.year - phone1.year;

        default:
          return 0;
      }
    });
  };

  const sortedPhones = useMemo(() => (
    sortPhones(selectSort)
  ), [phones, selectSort]);

  const getPhonesWithLimitFromServer = useCallback(
    async (offset: number, limit: string) => {
      try {
        setIsLoading(true);
        const length = await getPhones();
        const phonesFromServer = await getPhonesWithLimit(offset, limit);

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

  useEffect(() => {
    getPhonesWithLimitFromServer(selectOffset, selectLimit);
  }, []);

  useEffect(() => {
    getPhonesWithLimitFromServer(selectOffset, selectLimit);
  }, [selectLimit, selectOffset]);

  return (
    <div className={s.catalog}>
      <h1 className={s.catalog__title}>Mobile phones</h1>

      <div className={s.catalog__count}>
        {phonesLength}
        models
      </div>

      <SelectParams
        selectSort={selectSort}
        selectLimit={selectLimit}
        optionsSorting={optionsSorting}
        optionsCount={optionsCount}
        setSelectLimit={setSelectLimit}
        setSelectSort={setSelectSort}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div className={s.catalog__list}>
          {sortedPhones?.map(({
            id,
            name,
            fullPrice,
            price,
            screen,
            capacity,
            ram,
            // year,
            // image
          }) => {
            return (
              <ProductCard
                key={id}
                name={name}
                fullPrice={fullPrice}
                price={price}
                screen={screen}
                capacity={capacity}
                ram={ram}
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
