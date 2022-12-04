import { Link } from 'react-router-dom';
import { Container } from '../Container';
import s from './NotFoundPage.module.scss';
import img from '../../assets/img/iPhone-14.png';

export const NotFoundPage = () => (
  <Container>
    <div className={s.description}>
      <p className={s.description__title}>
        Error 404.
        <br />
        Page not found.
        <br />
        <br />
        {'Hey Siri, '}
        <br />
        <Link to="/">
          <span className={s.description__link}>
            take me home
          </span>
        </Link>
      </p>

      <img
        className={s.description__image}
        src={img}
        alt="iphone 14"
      />
    </div>
  </Container>

);
