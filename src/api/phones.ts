import { client } from '../utils/fetchClient';
import { Phone } from '../types/Phone';
import { Product } from '../types/Product';

export const getPhones = async () => {
  const phones = await client.get<Product<Phone[]>>('/products/phones');

  return phones || null;
};

export const getProductLength = async () => {
  const productLength = await client.get<Number>('/products/length');

  return productLength;
}
