export interface UserContextI {
  favouritesIds: string[],
  setFavouritesIds: (ids: string[]) => void,
  cartItemsIds: string[],
  setCartItemsIds: (ids: string[]) => void,
  cartItemsNumber: string[],
  setCartItemsNumber: (numbers: string[]) => void,
}
