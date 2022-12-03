import { useEffect, useState } from 'react';

import { Product } from '../../types/Product';
import { Phone } from '../../types/Phone';
import { getPhones } from '../../api/phones';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';
import { SelectParams } from '../SelectParams';
import { Pagination } from "../Pagination";

import s from './Catalog.module.scss'

export const Catalog = () => {
  const [phones, setPhones] = useState<Phone[]>();
  const [isLoading, setIsLoading] = useState(false);

  const getPhonesFromServer = async () => {
    try {
      setIsLoading(true)
      const phonesFromServer = await getPhones();

      setPhones(phonesFromServer.edges);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPhonesFromServer();
  }, []);

  return (
    <div className={s.catalog}>
      <h1 className={s.catalog__title}>Mobile phones</h1>

      <div className={s.catalog__count}>
        {phones?.length} models
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SelectParams />

          <div className={s.catalog__list}>
            {phones?.map(({
              id,
              name,
              fullPrice,
              price,
              screen,
              capacity,
              ram,
              year,
              image
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
                  year={year}
                  image={image}
                />
              );
            })}
          </div>

          <Pagination />
        </>
      )}
    </div>
  );
};
