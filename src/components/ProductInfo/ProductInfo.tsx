import { useState, useCallback, useEffect } from 'react';

import { Loader } from '../Loader';
import { ProductLayout } from './ProductLayout';

import { PhoneInfo } from '../../types/PhoneInfo';
import { getPhone } from '../../api/phones';
import { PhoneFullInfo } from '../../types/PhoneFullInfo';

type Props = {
  phoneId: string,
};

export const ProductInfo: React.FC<Props> = ({ phoneId }) => {
  const [phone, setPhone] = useState<PhoneInfo | null>(null);
  const [currentPhone, setCurrentPhone] = useState<PhoneFullInfo>();
  const [loading, setLoading] = useState(false);

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
  }, []);

  useEffect(() => {
    getPhoneFromServer(phoneId);
  }, []);

  useEffect(() => {
    if (phone) {
      setCurrentPhone(phone.phone);
    }
  }, [phone]);

  if (loading) {
    return <Loader />;
  }

  return (
    currentPhone
      ? <ProductLayout phone={currentPhone} />
      : <h1>Some error</h1>
  );
};
