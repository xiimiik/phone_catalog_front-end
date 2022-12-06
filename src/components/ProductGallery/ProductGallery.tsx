import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs, EffectFade } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/thumbs';
import s from './ProductGallery.module.scss';

import img from '../../assets/img/iphone11.png';

export const ProductGallery = () => {
  const [activeThumb, setActiveThumb] = useState<SwiperCore>();

  return (
    <div className={s.gallery}>
      <Swiper
        className={s.product__image_slider}
        modules={[Thumbs, EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
      >
        <SwiperSlide>
          <img
            src={img}
            alt="lol"
            style={{
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img}
            alt="lol"
            style={{
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img}
            alt="lol"
            style={{
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img}
            alt="lol"
            style={{
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img}
            alt="lol"
            style={{
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        watchSlidesProgress
        onSwiper={setActiveThumb}
        className={s.product__image_slider_thumbs}
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={5}
      >
        <SwiperSlide
          className={s.product__slider_thumb}
        >
          <img
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
            }}
            src={img}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          className={s.product__slider_thumb}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            src={img}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          className={s.product__slider_thumb}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            src={img}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          className={s.product__slider_thumb}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            src={img}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          className={s.product__slider_thumb}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            src={img}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
