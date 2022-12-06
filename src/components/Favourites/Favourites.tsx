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

import s from './Favourites.module.scss';

export const Favourites = () => {
  const { favouritesIds } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavourites] = useState<Phone[]>([]);

  const getPhonesFromServer = useCallback(
    async () => {
      try {
        setIsLoading(true);
        const phonesFromServer
          = await getPhonesByIds(favouritesIds);

        setFavourites(phonesFromServer.edges);
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    }, [favouritesIds],
  );

  useEffect(() => {
    getPhonesFromServer();
  }, []);

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
      ) : (
        <div className={s.favourites__list}>
          {favorites?.map(({
            id,
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
    </div>
  );
};
