import img from "../../assets/img/Apple.png";
import s from "./ProductCard.module.scss";

import { Button } from "../Button";
import { Favorite } from "../Favorite/Favorite";

export const ProductCard = () => {
  return (
    <article className={s.productCard}>
      <img className={s.productCard__img} src={img} alt="appleProduct" />

      <h3 className={s.productCard__title}>
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </h3>

      <div className={s.productCard__price}>
        $799 <span className={s.productCard__price_oldPrice}>$899</span>
      </div>

      <ul className={s.productCard__specs}>
        <li className={s.productCard__info}>
          <h6 className={s.productCard__name}>Screen</h6>
          <strong className={s.productCard__value}>5.8” OLED</strong>
        </li>

        <li className={s.productCard__info}>
          <h6 className={s.productCard__name}>Capacity</h6>
          <strong className={s.productCard__value}>64 GB</strong>
        </li>

        <li className={s.productCard__info}>
          <h6 className={s.productCard__name}>RAM</h6>
          <strong className={s.productCard__value}>4 GB</strong>
        </li>
      </ul>

      <footer className={s.productCard__action}>
        <div className={s.productCard__btn}>
          <Button />
        </div>

        <Favorite />
      </footer>
    </article>
  );
};
