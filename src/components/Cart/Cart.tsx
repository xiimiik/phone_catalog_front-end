import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { CartForm } from '../CartForm';
import { CartList } from '../CartList';

import s from './Cart.module.scss';
import img from '../../assets/img/LeftArrow.svg';
import { UserContext } from '../../context/Context';
import { Phone } from '../../types/Phone';
import { getPhonesByIds } from '../../api/phones';

export const Cart: React.FC = () => {
  const { cartItemsIds, cartItemsNumber } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState<Phone[]>([]);
  const isCartEmpty = cartItems.length === 0;
  const total = cartItems.reduce((sum, item) => {
    const index = cartItemsIds.findIndex(cartItem => cartItem === item.id);
    const quantity = cartItemsNumber[index];

    return sum + item.price * +quantity;
  }, 0);

  const getPhonesFromServer = useCallback(
    async () => {
      try {
        setIsLoading(true);
        const phonesFromServer = await getPhonesByIds(cartItemsIds);

        setCartItems(phonesFromServer);
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    }, [cartItemsIds],
  );

  useEffect(() => {
    getPhonesFromServer();
  }, [cartItemsIds]);

  return (
    <div className={s.cart}>
      <a href="/" className={s.cart__button}>
        <img src={img} alt="arrow" />
        Back
      </a>
      <h1 className={s.cart__title}>Cart</h1>

      <div className={s.cart__content}>
        {isCartEmpty ? (
          <p>Cart is empty</p>
        ) : (
          <>
            <CartList cartItems={cartItems} isLoading={isLoading} />
            <CartForm total={total} quantity={cartItems.length} />
          </>
        )}

      </div>
    </div>
  );
};
