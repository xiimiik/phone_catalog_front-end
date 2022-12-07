import React, { ReactNode } from 'react';
import { UserContextI } from '../types/UserContextI';
import { useStorage } from '../utils/useStorage';

export const UserContext = React.createContext<UserContextI>({
  favouritesIds: [],
  setFavouritesIds: () => {},
  cartIds: [],
  setCartIds: () => {},
});

type Props = {
  children: ReactNode
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [favouritesIds, setFavouritesIds] = useStorage([], 'Favorite');
  const [cartIds, setCartIds] = useStorage([], 'Cart');

  const contextValues = {
    favouritesIds,
    setFavouritesIds,
    cartIds,
    setCartIds,
  };

  return (
    <UserContext.Provider value={contextValues}>
      { children }
    </UserContext.Provider>
  );
};
