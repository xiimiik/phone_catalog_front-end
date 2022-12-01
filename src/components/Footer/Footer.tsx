import { NavLink } from "react-router-dom";

import logoImg from '../../assets/img/Logo.svg';
import st from './Footer.module.scss';
import scroll from '../../assets/img/ScrollUp.svg'


export const Footer: React.FC = () => {
  return (
    <footer className={st.footer}>
      <NavLink to="/">
        <img 
          src={logoImg}
          alt="Logo"
          className={st.footer__logo}
        />
      </NavLink>

      <ul className={st.footer__list}>
        <li>
          <NavLink
            className={st.footer__item}
            to={"/"}
          >
            Github
          </NavLink>
        </li>
        <li>
          <NavLink
            className={st.footer__item}
            to={"/"}
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            className={st.footer__item}
            to={"/"}
          >rights</NavLink>
        </li>
      </ul>

      <div className={st.footer__scroll}>
        <p className={st.footer__scrollText}>Back to top</p>
        <NavLink to="/nav">
        <img 
          src={scroll}
          alt="Scroll up"
        />
      </NavLink>
      </div>
    </footer>
  );
}