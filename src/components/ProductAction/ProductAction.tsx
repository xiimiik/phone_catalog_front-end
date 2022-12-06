import { Button } from '../Button';
import { Favorite } from '../Favorite/Favorite';

import s from './ProductAction.module.scss';

export const ProductAction = () => {
  return (
    <div className={s.action}>
      <div className={s.action__btn}>
        <Button />
      </div>

      <div className={s.action__favorite}>
        <Favorite />
      </div>
    </div>
  );
};
