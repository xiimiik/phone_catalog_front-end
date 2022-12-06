import { useState } from 'react';
import { Phone } from '../../types/Phone';
import s from './HomePage.module.scss';
import { Categories } from '../../components/Categories';
import { Container } from '../../components/Container';
import { PageSection } from '../../components/PageSection';
import { PromoSlider } from '../../components/PromoSlider';
import { ProductsSlider } from '../../components/ProductsSlider';
import { Loader } from '../../components/Loader';

const arr: Phone[] = [
  {
    id: '11',
    category: 'phones',
    phoneId: 'apple-iphone-11-pro-max-256gb-gold',
    itemId: 'apple-iphone-11-pro-max-256gb-gold',
    name: 'Apple iPhone 11 Pro Max 256GB Gold',
    fullPrice: 1776,
    price: 1680,
    screen: '6.5\' OLED',
    capacity: '256GB',
    color: 'gold',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro-max/gold/00.jpg',
  },
  {
    id: '11',
    category: 'phones',
    phoneId: 'apple-iphone-11-pro-max-256gb-gold',
    itemId: 'apple-iphone-11-pro-max-256gb-gold',
    name: 'Apple iPhone 11 Pro Max 256GB Gold',
    fullPrice: 1776,
    price: 1680,
    screen: '6.5\' OLED',
    capacity: '256GB',
    color: 'gold',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro-max/gold/00.jpg',
  },
  {
    id: '11',
    category: 'phones',
    phoneId: 'apple-iphone-11-pro-max-256gb-gold',
    itemId: 'apple-iphone-11-pro-max-256gb-gold',
    name: 'Apple iPhone 11 Pro Max 256GB Gold',
    fullPrice: 1776,
    price: 1680,
    screen: '6.5\' OLED',
    capacity: '256GB',
    color: 'gold',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro-max/gold/00.jpg',
  },
  {
    id: '11',
    category: 'phones',
    phoneId: 'apple-iphone-11-pro-max-256gb-gold',
    itemId: 'apple-iphone-11-pro-max-256gb-gold',
    name: 'Apple iPhone 11 Pro Max 256GB Gold',
    fullPrice: 1776,
    price: 1680,
    screen: '6.5\' OLED',
    capacity: '256GB',
    color: 'gold',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro-max/gold/00.jpg',
  },
];

export const HomePage = () => {
  const [phones] = useState<Phone[]>(arr);
  const [isLoading] = useState(false);

  return (
    <>
      <Container>
        <h1 className={s.page__title}>Welcome to Nice Gadgets store!</h1>
      </Container>

      <PageSection>
        <PromoSlider />
      </PageSection>

      <PageSection>
        {isLoading
          ? <Loader />
          : (
            <ProductsSlider<Phone>
              products={phones}
              title="Brand new models"
            />
          )}
      </PageSection>

      <Container>
        <PageSection>
          <h2 className={s.page__subtitle}>Shop by category</h2>
          <Categories />
        </PageSection>
      </Container>

      <PageSection>
        {isLoading
          ? <Loader />
          : (
            <ProductsSlider<Phone>
              products={phones}
              title="Hot prices"
            />
          )}
      </PageSection>
    </>
  );
};
