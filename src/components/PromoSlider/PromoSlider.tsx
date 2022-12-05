import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Link } from 'react-router-dom';

import s from './PromoSlider.module.scss';

export const PromoSlider: React.FC = () => {
  return (
    <div className={s.promo}>
      <div className={s.promo__wrapper}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          loop
          className={s.promo__swiper}
        >
          <SwiperSlide>
            <Link
              to="/phones"
              className={`${s.promo__image} ${s.promo__image_1}`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/phones"
              className={`${s.promo__image} ${s.promo__image_2}`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/phones"
              className={`${s.promo__image} ${s.promo__image_3}`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
