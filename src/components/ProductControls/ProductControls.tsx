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
  const transformedColors = colorsAvailable.map(currentColor => {
    switch (currentColor) {
      case 'green':
        return '#bce7d4';

      case 'yellow':
        return '#ffe88a';

      case 'purple':
        return '#d4d1dc';

      case 'red':
        return '#970013';

      case 'midnightgreen':
        return '#2e3933';

      case 'spacegray':
        return '#302e2f';

      case 'silver':
        return '#e3e3db';

      case 'gold':
        return '#d4d2b9';

      case 'black':
        return '#1e201f';

      case 'white':
        return '#f7f7f7';

      case 'coral':
        return '#f9614c';

      default:
        return '#fff';
    }
  });

  return (
    <div className={s.controls}>
      <div className={s.controls__item}>
        <h4 className={s.controls__title}>
          Available colors
          <span className={s.controls__code}>ID: 802390</span>
        </h4>

        <ul className={s.controls__params}>
          {transformedColors.map((currentColor: string, i) => (
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
