import { Link } from 'react-router-dom';
import s from './ErrorWarning.module.scss';

export const ErrorWarning: React.FC = () => {
  return (
    <div className={s.warning}>
      <div className={s.warning__content}>
        <div className={s.warning__box}>
          <div className={s.warning__img_box} />
          <div className={s.warning__subtitle}>
            Oh NO! Something went wrong :&#40;
          </div>
          <div className={s.warning__comment}>
            Please, try again or go back to the homepage.
          </div>
          <Link to="/" className={s.warning__button}>
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};
