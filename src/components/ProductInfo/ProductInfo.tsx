import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Loader } from '../Loader';
import { ProductLayout } from './ProductLayout';

import { PhoneInfo } from '../../types/PhoneInfo';
import { getPhone } from '../../api/phones';
import { PhoneFullInfo } from '../../types/PhoneFullInfo';
import { ProductsSlider } from '../ProductsSlider';
import { Phone } from '../../types/Phone';

type Props = {
  phoneId: string,
};

export const ProductInfo: React.FC<Props> = ({ phoneId }) => {
  const location = useLocation();
  const similarId = location.pathname
    .slice(location.pathname.lastIndexOf('/') + 1);

  const [phone, setPhone] = useState<PhoneInfo | null>(null);
  const [currentPhoneFull, setCurrentPhoneFull] = useState<PhoneFullInfo>();
  const [similarPhones, setSimilarPhones] = useState<Phone[]>();
  const [currentPhone, setCurrentPhone] = useState<Phone>();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(location.pathname);

  const getPhoneFromServer = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const phoneFromServer = await getPhone(id);

      setPhone(phoneFromServer);
    } catch (error: any) {
      window.console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [phone]);

  useEffect(() => {
    getPhoneFromServer(phoneId);
  }, []);

  useEffect(() => {
    if (phone) {
      setCurrentPhoneFull(phone.phone);
      setSimilarPhones(phone.similar);
      setCurrentPhone(phone.currPhone);
    }
  }, [phone]);

  if (url !== location.pathname) {
    setUrl(location.pathname);
  }

  useEffect(() => {
    getPhoneFromServer(similarId);
  }, [url]);

  if (loading) {
    return <Loader />;
  }

  return (
    currentPhoneFull && similarPhones && currentPhone
      ? (
        <>
          <ProductLayout
            phoneFullInfo={currentPhoneFull}
            currentPhone={currentPhone}
          />
          <ProductsSlider
            products={similarPhones}
            title="You may also like"
          />
        </>
      )
      : <h1>Some error</h1>
  );
};
