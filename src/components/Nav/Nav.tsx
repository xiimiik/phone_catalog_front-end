import { Link, NavLink } from 'react-router-dom';

import logoImg from '../../assets/img/Logo.svg';
import favouritesImg from '../../assets/img/Favourites.svg';
import shoppingBagImg from '../../assets/img/ShoppingBag.svg';
import menuImg from '../../assets/img/Menu.svg';

import s from './Nav.module.scss';
import cn from 'classnames';

const navLinks = [
  {to: "/", text: "home"},
  {to: "/phones", text: "phones"},
  {to: "/tablets", text: "tablets"},
  {to: "/accessories", text: "accessories"},
];

const boxLinks = [
  {to: "/favorites", imgSrc: favouritesImg, alt: 'favorites'},
  {to: "/cart", imgSrc: shoppingBagImg, alt: 'cart'},
];

export const Nav: React.FC = () => {
  return (
    <nav className={s.nav}>
      <Link to="/">
        <img 
          src={logoImg}
          alt="Logo"
          className={s.nav__logo}
        />
      </Link>

      <ul className={s.nav__list}>
        {navLinks.map(({ to, text }) => (
          <li key={text} className={s.nav__item}>
            <NavLink 
              to={to} 
              className={
                ({ isActive }) => cn(s.nav__link, {[s['nav__link_active']]: isActive })
              }
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={s.nav__cart}>
        {boxLinks.map(({ to, imgSrc, alt }) => (
          <NavLink key={alt} to={to} className={s.nav__cart_item}>
            <img src={imgSrc} alt={alt}/>
          </NavLink>
        ))}
      </div>

      <button className={s.nav__menu}>
        <img src={menuImg} alt="Shopping Bag" />
      </button>
    </nav>
  );
}