export interface UserContextI {
  favouritesIds: string[],
  setFavouritesIds: (ids: string[]) => void,
  cartIds: string[],
  setCartIds: (ids: string[]) => void,
}
