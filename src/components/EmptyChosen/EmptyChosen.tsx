import { Link } from 'react-router-dom';
import s from './EmptyChosen.module.scss';
import imgFavorites from '../../assets/img/simple-red-heart-02.png';
import imgProducts from '../../assets/img/shopping-cart.png';

enum Group {
  Favorites = 'favorites',
  Products = 'products',
}

type Props = {
  group: string;
  actionText: string;
};

export const EmptyChosen: React.FC<Props> = ({
  group,
  actionText,
}) => {
  const img = (group === Group.Favorites) ? imgFavorites : imgProducts;

  return (
    <div className={s.empty}>
      <div className={s.empty__content}>
        <div className={s.empty__title}>
          Hello!
        </div>
        <div className={s.empty__box}>
          <div className={s.empty__img_box}>
            <img
              src={img}
              alt="icon"
              className={s.empty__img}
            />
          </div>
          <div className={s.empty__subtitle}>
            {`No ${group} yet!`}
          </div>
          <div className={s.empty__comment}>
            {`You haven't ${actionText}ed any ${group}`}
          </div>
          <Link to="/phones" className={s.empty__button}>
            {`${actionText} ${group} now`}
          </Link>
        </div>
      </div>
    </div>
  );
};
