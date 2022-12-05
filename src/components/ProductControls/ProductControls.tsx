/* eslint-disable react/jsx-closing-tag-location */
import cn from 'classnames';
import s from './ProductControls.module.scss';

export const ProductControls = () => {
  const active = true;

  return (
    <div className={s.controls}>
      <div className={s.controls__item}>
        <h4 className={s.controls__title}>
          Available colors
          <span className={s.controls__code}>ID: 802390</span>
        </h4>

        <ul className={s.controls__params}>
          <li className={s.controls__params_item}>
            <div
              className={cn(s.controls__params_item_wrap, {
                [s.controls__params_item_wrap_active]: active,
              })}
            >
              <div
                className={s.controls__params_item_inner}
                style={{ backgroundColor: '#FCDBC1' }}
              > </div>
            </div>
          </li>

          <li className={s.controls__params_item}>
            <div className={s.controls__params_item_wrap}>
              <div
                className={s.controls__params_item_inner}
                style={{ backgroundColor: '#5F7170' }}
              > </div>
            </div>
          </li>

          <li className={s.controls__params_item}>
            <div className={s.controls__params_item_wrap}>
              <div
                className={s.controls__params_item_inner}
                style={{ backgroundColor: '#4C4C4C' }}
              > </div>
            </div>
          </li>

          <li className={s.controls__params_item}>
            <div className={s.controls__params_item_wrap}>
              <div
                className={s.controls__params_item_inner}
                style={{ backgroundColor: '#F0F0F0' }}
              > </div>
            </div>
          </li>
        </ul>
      </div>

      <div className={s.controls__item}>
        <h4 className={s.controls__title}>
          Select capacity
        </h4>

        <ul className={s.controls__params}>
          <li className={s.controls__params_item}>
            <div
              className={cn(s.controls__params_capacity, {
                [s.controls__params_capacity_active]: active,
              })}
            >
              64 GB
            </div>
          </li>

          <li className={s.controls__params_item}>
            <div className={s.controls__params_capacity}>
              256 GB
            </div>
          </li>

          <li className={s.controls__params_item}>
            <div className={s.controls__params_capacity}>
              512 GB
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
