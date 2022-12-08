import React, { ReactNode } from 'react';
import { UserContextI } from '../types/UserContextI';
import { useStorage } from '../utils/useStorage';

export const UserContext = React.createContext<UserContextI>({
  favouritesIds: [],
  setFavouritesIds: () => {},
  cartItemsIds: [],
  setCartItemsIds: () => {},
  cartItemsNumber: [],
  setCartItemsNumber: () => {},
});

type Props = {
  children: ReactNode
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [favouritesIds, setFavouritesIds] = useStorage([], 'Favorite');
  const [cartItemsIds, setCartItemsIds] = useStorage([], 'Cart');
  const [
    cartItemsNumber, setCartItemsNumber,
  ] = useStorage([], 'CartItemsQuantity');

  const contextValues = {
    favouritesIds,
    setFavouritesIds,
    cartItemsIds,
    setCartItemsIds,
    cartItemsNumber,
    setCartItemsNumber,
  };

  return (
    <UserContext.Provider value={contextValues}>
      { children }
    </UserContext.Provider>
  );
};
