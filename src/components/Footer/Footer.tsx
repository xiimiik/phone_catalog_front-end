import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/img/Logo.svg';
import s from './Footer.module.scss';
import scrollImg from '../../assets/img/ScrollUp.svg';

const footerLinks = [
  { href: 'https://github.com/fe-aug22-ta-y-take', text: 'Github' },
  { href: 'https://github.com/fe-aug22-ta-y-take', text: 'Contacts' },
  { href: 'https://github.com/fe-aug22-ta-y-take', text: 'Rights' },
];

export const Footer: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer className={s.footer}>
      <Link to="/">
        <img
          src={logoImg}
          alt="Logo"
          className={s.footer__logo}
        />
      </Link>

      <ul className={s.footer__list}>
        {footerLinks.map(({ href, text }) => (
          <li key={text} className={s.footer__item}>
            <a
              className={s.footer__link}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={s.footer__scroll}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        Back to top
        <img
          src={scrollImg}
          alt="Scroll up"
        />
      </button>
    </footer>
  );
};
