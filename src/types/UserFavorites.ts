import { Phone } from './Phone';

export interface UserFavorites {
  favourites: Phone[],
  setFavourites: (phone: Phone[]) => void,
}
