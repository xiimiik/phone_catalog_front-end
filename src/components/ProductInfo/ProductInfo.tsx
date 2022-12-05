import { ProductGallery } from '../ProductGallery/ProductGallery';
import { ProductControls } from '../ProductControls';
import { ProductAction } from '../ProductAction';

import s from './ProductInfo.module.scss';

export const ProductInfo = () => {
  return (
    <div className={s.product}>
      <h1 className={s.product__title}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className={s.product__promo}>
        <div className={s.product__gallery}>
          <ProductGallery />
        </div>

        <div className={s.product__controls}>
          <ProductControls />
        </div>

        <div className={s.product__action}>
          <ProductAction />
        </div>
      </div>

    </div>
  );
};
