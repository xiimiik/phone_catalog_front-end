import logoImg from '../../assets/img/Logo.svg';
import favouritesImg from '../../assets/img/Favourites.svg';
import shoppingBagImg from '../../assets/img/ShoppingBag.svg';
import s from './Nav.module.scss';

export const Nav: React.FC = () => {
  return (
    <nav className={s.nav}>
      <a href="/">
        <img 
          src={logoImg}
          alt="Logo"
          className={s.nav__logo}
        />
      </a>

      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <a href="/" className={`${s.nav__link} ${s.nav__link_active}`}>home</a>
        </li>
        <li className={s.nav__item}>
          <a href="/" className={s.nav__link}>phones</a>
        </li>
        <li className={s.nav__item}>
          <a href="/" className={s.nav__link}>tablets</a>
        </li>
        <li className={s.nav__item}>
          <a href="/" className={s.nav__link}>accessories</a>
        </li>
      </ul>

      <div className={s.nav__cart}>
        <a href="/" className={s.nav__cart_item}>
          <img src={favouritesImg} alt="Favourites"/>
        </a>

        <a href="/" className={s.nav__cart_item}>
          <img src={shoppingBagImg} alt="Shopping Bag" />
        </a>
      </div>
    </nav>
  );
}