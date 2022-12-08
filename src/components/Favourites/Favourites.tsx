/* eslint-disable no-nested-ternary */
import {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getPhonesByIds } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { UserContext } from '../../context/Context';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';
import { EmptyChosen } from '../EmptyChosen';

import s from './Favourites.module.scss';

export const Favourites = () => {
  const { favouritesIds } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavourites] = useState<Phone[]>([]);

  const getPhonesFromServer = useCallback(
    async () => {
      try {
        setIsLoading(true);
        const phonesFromServer = await getPhonesByIds(favouritesIds);

        setFavourites(phonesFromServer);
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    }, [favouritesIds],
  );

  useEffect(() => {
    getPhonesFromServer();
  }, [favouritesIds]);

  return (
    <div className={s.favourites}>
      <h1 className={s.favourites__title}>Favourites</h1>

      <div className={s.favourites__count}>
        {favouritesIds.length}
        {' '}
        models
      </div>
 
      {isLoading ? (
        <Loader />
      ) : (!favouritesIds.length ? (
        <EmptyChosen
          group="favorites"
          actionText="mark"
        />
      ) : (
        <div className={s.favourites__list}>
          {favorites?.map(phone => {
            return (
              <ProductCard
                key={phone.id}
                phone={phone}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
