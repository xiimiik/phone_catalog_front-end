import s from './ProductControls.module.scss';

export const ProductControls = () => {
  return (
    <div className={s.controls}>
      <div className={s.controls__item}>
        <h4 className={s.controls__title}>
          Available colors
          <span className={s.controls__code}>ID: 802390</span>
        </h4>

        <ul className={s.controls__colors}>
          <li className={s.controls__colors_item}>
            <div className={s.controls__colors_item_wrap}>
              <div className={s.controls__colors_item_inner}> </div>
            </div>
          </li>

          <li className={s.controls__colors_item}>
            <div className={s.controls__colors_item_wrap}>
              <div className={s.controls__colors_item_inner}> </div>
            </div>
          </li>

          <li className={s.controls__colors_item}>
            <div className={s.controls__colors_item_wrap}>
              <div className={s.controls__colors_item_inner}> </div>
            </div>
          </li>

          <li className={s.controls__colors_item}>
            <div className={s.controls__colors_item_wrap}>
              <div className={s.controls__colors_item_inner}> </div>
            </div>
          </li>
        </ul>
      </div>

      <div className={s.controls__item}>
        <h4 className={s.controls__title}>
          Available colors
          <span className={s.controls__code}>ID: 802390</span>
        </h4>
      </div>
    </div>
  );
};
