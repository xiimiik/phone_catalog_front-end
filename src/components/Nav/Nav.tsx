/* eslint-disable max-len */
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import cn from 'classnames';
import s from './Nav.module.scss';

import logoImg from '../../assets/img/Logo.svg';
import favouritesImg from '../../assets/img/Favourites.svg';
import shoppingBagImg from '../../assets/img/ShoppingBag.svg';

const navLinks = [
  { to: '/', text: 'home' },
  { to: '/phones', text: 'phones' },
  { to: '/tablets', text: 'tablets' },
  { to: '/accessories', text: 'accessories' },
];

const boxLinks = [
  { to: '/favorites', imgSrc: favouritesImg, alt: 'favorites' },
  { to: '/cart', imgSrc: shoppingBagImg, alt: 'cart' },
];

export const Nav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const onOpenMenu = () => {
    setActiveMenu(active => !active);
    document.body.style.overflow = 'hidden';

    if (activeMenu) {
      document.body.style.overflow = '';
    }
  };

  const onCloseMenu = () => {
    setActiveMenu(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className={s.nav}>
      <Link
        to="/"
        onClick={onCloseMenu}
      >
        <img
          src={logoImg}
          alt="Logo"
          className={s.nav__logo}
        />
      </Link>

      <button
        className={cn(s.nav__menu, {
          [s.nav__menu_active]: activeMenu,
        })}
        onClick={onOpenMenu}
      >
        <div className={s.nav__menu_wrap}>
          <span className={s.nav__menu_item} />
        </div>
      </button>

      <div className={cn(s.nav__wrapper, {
        [s.nav__wrapper_active]: activeMenu,
      })}
      >
        <ul className={s.nav__list}>
          {navLinks.map(({ to, text }) => (
            <li key={text} className={s.nav__item}>
              <NavLink
                to={to}
                className={
                  ({ isActive }) => cn(s.nav__link, { [s.nav__link_active]: isActive })
                }
                onClick={onCloseMenu}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={s.nav__cart}>
          {boxLinks.map(({ to, imgSrc, alt }) => (
            <NavLink
              key={alt}
              to={to}
              className={s.nav__cart_item}
              onClick={onCloseMenu}
            >
              <img src={imgSrc} alt={alt} />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
