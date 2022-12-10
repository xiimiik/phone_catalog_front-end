/* eslint-disable max-len */
import { Link, NavLink } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import cn from 'classnames';
import s from './Nav.module.scss';

import logoImg from '../../assets/img/Logo.svg';
import favouritesImg from '../../assets/img/Favourites.svg';
import shoppingBagImg from '../../assets/img/ShoppingBag.svg';
import { UserContext } from '../../context/Context';

const navLinks = [
  { to: '/', text: 'home' },
  { to: '/phones', text: 'phones' },
  { to: '/tablets', text: 'tablets' },
  { to: '/accessories', text: 'accessories' },
];

export const Nav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const { favouritesIds, cartItems } = useContext(UserContext);

  const cartItemsIds = cartItems.map(item => item.id);
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
          <NavLink
            to="/favorites"
            className={s.nav__cart_item}
            onClick={onCloseMenu}
          >
            <img src={favouritesImg} alt="favorites" className={s.cart__cart_item_img} />

            {favouritesIds.length > 0 && (
              <span className={s.nav__cart_item_idic}>
                {favouritesIds.length}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className={s.nav__cart_item}
            onClick={onCloseMenu}
          >
            <img src={shoppingBagImg} alt="cart" />

            {cartItemsIds.length > 0 && (
              <span className={s.nav__cart_item_idic}>
                {cartItemsIds.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
