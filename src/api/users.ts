import { client } from '../utils/fetchClient';
import { Phone } from '../types/Phone';

export const getPhones = async () => {
  const phones = await client.get<Phone[]>('/products');

  return phones || null;
};
