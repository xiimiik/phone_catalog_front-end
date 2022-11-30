import { NavLink } from 'react-router-dom';

import logoImg from '../../assets/img/Logo.svg';
import favouritesImg from '../../assets/img/Favourites.svg';
import shoppingBagImg from '../../assets/img/ShoppingBag.svg';
import menuImg from '../../assets/img/Menu.svg';
import s from './Nav.module.scss';
import cn from 'classnames';

export const Nav: React.FC = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/">
        <img 
          src={logoImg}
          alt="Logo"
          className={s.nav__logo}
        />
      </NavLink>

      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <NavLink 
          to="/" 
          className={
            ({ isActive }) => cn(s.nav__link, {[s['nav__link_active']]: isActive })
          }
        >
          home</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink 
          to="/phones" 
          className={
            ({ isActive }) => cn(s.nav__link, {[s['nav__link_active']]: isActive })
          }
        >
          phones</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink 
          to="/tablets" 
          className={
            ({ isActive }) => cn(s.nav__link, {[s['nav__link_active']]: isActive })
          }
        >
          tablets</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink 
          to="/accessories" 
          className={
            ({ isActive }) => cn(s.nav__link, {[s['nav__link_active']]: isActive })
          }
        >
          accessories</NavLink>
        </li>
      </ul>

      <div className={s.nav__cart}>
        <NavLink to="/favorites" className={s.nav__cart_item}>
          <img src={favouritesImg} alt="Favourites"/>
        </NavLink>

        <NavLink to="/cart" className={s.nav__cart_item}>
          <img src={shoppingBagImg} alt="Shopping Bag" />
        </NavLink>
      </div>

      <NavLink to="/menu" className={s.nav__menu}>
        <img src={menuImg} alt="Shopping Bag" />
      </NavLink>
    </nav>
  );
}