import { Button } from '../Button';
import { Favorite } from '../Favorite/Favorite';

import s from './ProductAction.module.scss';

type Props = {
  id: string
};

export const ProductAction: React.FC<Props> = ({ id }) => {
  return (
    <div className={s.action}>
      <div className={s.action__btn}>
        <Button id={id} />
      </div>

      <div className={s.action__favorite}>
        <Favorite id={id} />
      </div>
    </div>
  );
};
