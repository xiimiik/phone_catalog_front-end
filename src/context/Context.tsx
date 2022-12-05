import React, { ReactNode } from 'react';
import { UserFavorites } from '../types/UserFavorites';
import { useStorage } from '../utils/useStorage';

export const UserFavourites = React.createContext<UserFavorites>({
  favourites: [],
  setFavourites: () => {},
});

type Props = {
  children: ReactNode;
};

export const UserFavouritesProvider: React.FC<Props> = ({ children }) => {
  const [favourites, setFavourites] = useStorage([], 'Favorite');

  const contextValues = {
    favourites,
    setFavourites,
  };

  return (
    <UserFavourites.Provider value={contextValues}>
      { children }
    </UserFavourites.Provider>
  );
};
