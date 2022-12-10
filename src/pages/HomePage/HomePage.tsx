import {
  useEffect,
  useState,
  useCallback,
} from 'react';

import { Phone } from '../../types/Phone';
import { getPhonesByGroup } from '../../api/phones';
import s from './HomePage.module.scss';
import { Categories } from '../../components/Categories';
import { Container } from '../../components/Container';
import { PageSection } from '../../components/PageSection';
import { PromoSlider } from '../../components/PromoSlider';
import { ProductsSlider } from '../../components/ProductsSlider';
import { Loader } from '../../components/Loader';
import { Group } from '../../types/Group';

export const HomePage = () => {
  const [newPhones, setNewPhones] = useState<Phone[]>([]);
  const [discountPhones, setDiscountPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasError, setHasError] = useState(false);

  const getProductsFromServer = useCallback(async () => {
    try {
      setIsLoading(true);

      const newProds = await getPhonesByGroup(Group.New);
      const discProds = await getPhonesByGroup(Group.Discount);

      setNewPhones(newProds.edges);
      setDiscountPhones(discProds.edges);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProductsFromServer();
  }, []);

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
              products={newPhones}
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

      {isLoading
        ? <Loader />
        : (
          <ProductsSlider<Phone>
            products={discountPhones}
            title="Hot prices"
          />
        )}
    </>
  );
};
