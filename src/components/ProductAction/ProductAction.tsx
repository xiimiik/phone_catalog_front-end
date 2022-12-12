import { Phone } from '../../types/Phone';
import { Button } from '../Button';
import { Favorite } from '../Favorite/Favorite';

import s from './ProductAction.module.scss';

type Props = {
  currentPhone: Phone,
};

export const ProductAction: React.FC<Props> = ({ currentPhone }) => {
  const { id } = currentPhone;

  return (
    <div className={s.action}>
      <div className={s.action__btn}>
        <Button phone={currentPhone} />
      </div>

      <div className={s.action__favorite}>
        <Favorite id={id} />
      </div>
    </div>
  );
};
