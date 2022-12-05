import s from './HomePage.module.scss';
import { Categories } from '../../components/Categories';
import { Container } from '../../components/Container';
import { HotPrices } from '../../components/HotPrices';
import { Models } from '../../components/Models';
import { PageSection } from '../../components/PageSection';
import { PromoSlider } from '../../components/PromoSlider';

export const HomePage = () => {
  return (
    <>
      <Container>
        <h1 className={s.page__title}>Welcome to Nice Gadgets store!</h1>
      </Container>

      <PageSection>
        <PromoSlider />
      </PageSection>

      <Container>
        <PageSection>
          <h2 className={s.page__subtitle}>Brand new models</h2>
          <Models />
        </PageSection>
      </Container>

      <Container>
        <PageSection>
          <h2 className={s.page__subtitle}>Shop by category</h2>
          <Categories />
        </PageSection>
      </Container>

      <Container>
        <PageSection>
          <h2 className={s.page__subtitle}>Hot prices</h2>
          <HotPrices />
        </PageSection>
      </Container>
    </>
  );
};
