import React, { useEffect, useState } from 'react';
import s from './Categories.module.scss';
import img_phones from '../../assets/img/categories_phones.png';
import img_tablets from '../../assets/img/categories_tablets.png';
import img_accessories from '../../assets/img/categories_accessories.png';
import { getPhones } from '../../api/phones';
import { Category } from '../Category/Category';

export const Categories: React.FC = () => {
  const [phonesLength, setPhonesLength] = useState(0);

  const getPhonesQuantity = async () => {
    try {
      const length = await getPhones();

      setPhonesLength(length.count);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    getPhonesQuantity();
  }, []);

  return (
    <ul className={s.categories}>
      <Category
        categoryName="phones"
        img={img_phones}
        categoryTitle="Mobile Phones"
        quantity={phonesLength}
      />

      <Category
        categoryName="tablets"
        img={img_tablets}
        categoryTitle="Tablets"
        quantity={0}
      />

      <Category
        categoryName="accessories"
        img={img_accessories}
        categoryTitle="Accessories"
        quantity={0}
      />
    </ul>
  );
};
