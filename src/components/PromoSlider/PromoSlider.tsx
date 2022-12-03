import React from 'react';
import s from './PromoSlider.module.scss';
import img from '../../assets/img/promo-slide-1.png';

export const PromoSlider: React.FC = () => {
  return (
    <div className={s.promo}>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src={img}
              alt="Slide 1"
              className={s.promo__image}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
