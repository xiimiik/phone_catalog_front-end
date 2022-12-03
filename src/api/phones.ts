import { client } from '../utils/fetchClient';
import { Phone } from '../types/Phone';
import { Product } from '../types/Product';

export const getPhones = async () => {
  const phones = await client.get<Product<Phone>>('/products/phones');

  return phones || null;
};

export const getPhonesWithLimit = async (
  offset: number,
  limit: string,
  order: string,
  dir: string,
) => {
  const phones = await client
    .get<Product<Phone>>(`/products/phones?limit=${limit}&offset=${offset}&order=${order}&dir=${dir}`);

  return phones || null;
};
