/* eslint-disable react/no-array-index-key */
import { ProductGallery } from '../ProductGallery/ProductGallery';
import { ProductControls } from '../ProductControls';
import { ProductAction } from '../ProductAction';
import { Breadcrumbs } from '../Breadcrumbs';

import { Description, PhoneFullInfo } from '../../types/PhoneFullInfo';

import s from './ProductLayout.module.scss';
import img from '../../assets/img/LeftArrow.svg';

type Props = {
  phone: PhoneFullInfo;
  phoneId: string;
};

export const ProductLayout: React.FC<Props> = ({
  phone,
  phoneId,
}) => {
  const {
    name,
    capacityAvailable,
    capacity,
    priceRegular,
    priceDiscount,
    colorsAvailable,
    color,
    images,
    description,
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  } = phone;

  const renderedCell = cell.map((item: string) => item).join(', ');

  return (
    <div className={s.product}>
      <Breadcrumbs
        breads={[
          { title: 'home', path: '/' },
          { title: 'Phones', path: '/phones' },
          { title: `${name} (iMT9G2FS/A)`, path: '/item' },
        ]}
      />

      <a href="/" className={s.product__back_btn}>
        <img src={img} alt="arrow" />
        Back
      </a>

      <h1 className={s.product__title}>
        {name}
        {' '}
        iMT9G2FS/A
      </h1>

      fghjfhjh

      <div className={s.product__promo}>
        <div className={s.product__gallery}>
          <ProductGallery images={images} />
        </div>

        <div className={s.product__info}>
          <div className={s.product__controls}>
            <ProductControls
              capacityAvailable={capacityAvailable}
              colorsAvailable={colorsAvailable}
              color={color}
              capacity={capacity}
            />
          </div>

          <div className={s.product__price}>
            {`$${priceDiscount}`}
            <span
              className={s.product__price_old}
            >
              {`$${priceRegular}`}
            </span>
          </div>

          <div className={s.product__action}>
            <ProductAction id={phoneId} />
          </div>

          <ul className={s.product__params}>
            <li className={s.product__params_item}>
              <h5 className={s.product__params_name}>Screen</h5>
              <strong className={s.product__params_value}>
                {screen}
              </strong>
            </li>

            <li className={s.product__params_item}>
              <h5 className={s.product__params_name}>Resolution</h5>
              <strong className={s.product__params_value}>
                {resolution}
              </strong>
            </li>

            <li className={s.product__params_item}>
              <h5 className={s.product__params_name}>Processor</h5>
              <strong className={s.product__params_value}>
                {processor}
              </strong>
            </li>

            <li className={s.product__params_item}>
              <h5 className={s.product__params_name}>RAM</h5>
              <strong className={s.product__params_value}>{ram}</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className={s.product__about}>
        <div className={s.product__description}>
          <h2 className={s.product__about_title}>About</h2>
          {description?.map((descr: Description, i) => (
            <article key={i} className={s.product__about_item}>
              <h4 className={s.product__about_item_title}>{descr.title}</h4>

              <div className={s.product__about_item_text}>
                <p>{descr.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={s.product__specs}>
          <h2 className={s.product__about_title}>Tech specs</h2>

          <ul className={s.product__specs_list}>
            <li className={s.product__specs_item}>
              <h5 className={s.product__specs_name}>Screen</h5>
              <strong className={s.product__specs_value}>
                {screen}
              </strong>
            </li>

            <li className={s.product__specs_item}>
              <h5 className={s.product__specs_name}>Resolution</h5>
              <strong className={s.product__specs_value}>
                {resolution}
              </strong>
            </li>

            <li className={s.product__specs_item}>
              <h5 className={s.product__specs_name}>Processor</h5>
              <strong className={s.product__specs_value}>
                {processor}
              </strong>
            </li>

            <li className={s.product__specs_item}>
              <h5 className={s.product__specs_name}>RAM</h5>
              <strong className={s.product__specs_value}>{ram}</strong>
            </li>

            <li className={s.product__specs_item}>
              <h5 className={s.product__specs_name}>Built in memory</h5>
              <strong className={s.product__specs_value}>
                {capacity}
              </strong>
            </li>

            <li className={s.product__specs_item}>
              <h5 className={s.product__specs_name}>Camera</h5>
              <strong className={s.product__specs_value}>
                {camera}
              </strong>
            </li>

            <li className={s.product__specs_item}>
              <h5 className={s.product__specs_name}>Zoom</h5>
              <strong className={s.product__specs_value}>{zoom}</strong>
            </li>

            <li className={s.product__specs_item}>
              <h5 className={s.product__specs_name}>Cell</h5>
              <strong className={s.product__specs_value}>
                {renderedCell}
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
