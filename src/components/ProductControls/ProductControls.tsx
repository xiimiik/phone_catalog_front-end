/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-closing-tag-location */
import cn from 'classnames';
import s from './ProductControls.module.scss';

type Props = {
  capacityAvailable: string[],
  colorsAvailable: string[],
  color: string,
  capacity: string,
};

export const ProductControls: React.FC<Props> = ({
  capacityAvailable,
  capacity,
  colorsAvailable,
  color,
}) => {
  const transformedColors = colorsAvailable.map(color => {
    switch (color) {
      case 'green':
        
    }
  })

  return (
    <div className={s.controls}>
      <div className={s.controls__item}>
        <h4 className={s.controls__title}>
          Available colors
          <span className={s.controls__code}>ID: 802390</span>
        </h4>

        <ul className={s.controls__params}>
          {colorsAvailable.map((currentColor: string, i) => (
            <li key={i} className={s.controls__params_item}>
              <div
                className={cn(s.controls__params_item_wrap, {
                  [s.controls__params_item_wrap_active]: currentColor === color,
                })}
              >
                <div
                  className={s.controls__params_item_inner}
                  style={{ backgroundColor: `${currentColor}` }}
                > </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={s.controls__item}>
        <h4 className={s.controls__title}>
          Select capacity
        </h4>

        <ul className={s.controls__params}>
          {capacityAvailable.map((currentCatacity, i) => (
            <li key={i} className={s.controls__params_item}>
              <div
                className={cn(s.controls__params_capacity, {
                  [s.controls__params_capacity_active]:
                  currentCatacity === capacity,
                })}
              >
                {currentCatacity}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
