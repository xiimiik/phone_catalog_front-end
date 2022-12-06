import React, { ReactNode } from 'react';
import { UserFavorites } from '../types/UserFavorites';
import { useStorage } from '../utils/useStorage';

export const UserFavourites = React.createContext<UserFavorites>({
  favouritesIds: [],
  setFavouritesIds: () => {},
  cartIds: [],
  setCartIds: () => {},
});

type Props = {
  children: ReactNode;
};

export const UserFavouritesProvider: React.FC<Props> = ({ children }) => {
  const [favouritesIds, setFavouritesIds] = useStorage([], 'Favorite');
  const [cartIds, setCartIds] = useStorage([], 'Favorite');

  const contextValues = {
    favouritesIds,
    setFavouritesIds,
    cartIds,
    setCartIds,
  };

  return (
    <UserFavourites.Provider value={contextValues}>
      { children }
    </UserFavourites.Provider>
  );
};
