import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import s from './ProductsSlider.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { ProductCard } from '../ProductCard';
import { Phone } from '../../types/Phone';

type Props<T> = {
  products: T[];
  title: string;
};

export const ProductsSlider = <T extends Phone>(
  { products, title }: Props<T>,
) => {
  return (
    <div className={s.slider}>
      <h2 className={s.slider__title}>{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        spaceBetween={16}
        className={s.slider__swiper}
      >
        {products.map(({
          id,
          name,
          fullPrice,
          price,
          screen,
          capacity,
          ram,
          image,
        }) => (
          <SwiperSlide
            key={id}
            className={s.slider__item}
          >
            <ProductCard
              name={name}
              fullPrice={fullPrice}
              price={price}
              screen={screen}
              capacity={capacity}
              ram={ram}
              image={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
