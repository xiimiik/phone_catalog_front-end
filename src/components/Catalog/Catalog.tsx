import {
  useEffect,
  useState,
  useCallback,
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

  useEffect(() => {
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
        setSorting={setSorting}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div className={s.catalog__list}>
          {phones?.map(({
            id,
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
              <ProductCard
                key={id}
                phoneId={phoneId}
                name={name}
                fullPrice={fullPrice}
                price={price}
                screen={screen}
                capacity={capacity}
                ram={ram}
                image={image}
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
