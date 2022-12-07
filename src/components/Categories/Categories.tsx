import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Categories.module.scss';
import img_phones from '../../assets/img/categories_phones.png';
import img_tablets from '../../assets/img/categories_tablets.png';
import img_accessories from '../../assets/img/categories_accessories.png';
import { getPhones } from '../../api/phones';

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
      <li className={s.category}>
        <div className={s.category__content}>
          <Link
            to="/phones"
            className={`${s.category__image_container} ${s.category__image_container__img1}`}
          >
            <img
              src={img_phones}
              className={s.category__image}
              alt="phones"
            />
          </Link>

          <Link
            to="/phones"
            className={s.category__title}
          >
            Mobile Phones
          </Link>

          <span className={s.category__quantity}>
            {`${phonesLength} models`}
          </span>
        </div>
      </li>

      <li className={s.category}>
        <div className={s.category__content}>
          <Link
            to="/tablets"
            className={`${s.category__image_container} ${s.category__image_container__img2}`}
          >
            <img
              src={img_tablets}
              className={s.category__image}
              alt="tablets"
            />
          </Link>

          <Link
            to="/tablets"
            className={s.category__title}
          >
            Tablets
          </Link>

          <span className={s.category__quantity}>
            0 models
          </span>
        </div>
      </li>

      <li className={s.category}>
        <div className={s.category__content}>
          <Link
            to="/accessories"
            className={`${s.category__image_container} ${s.category__image_container__img3}`}
          >
            <img
              src={img_accessories}
              className={s.category__image}
              alt="accessories"
            />
          </Link>

          <Link
            to="/accessories"
            className={s.category__title}
          >
            Accessories
          </Link>

          <span className={s.category__quantity}>
            0 models
          </span>
        </div>
      </li>
    </ul>
  );
};
