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
import { EmptyChosen } from '../EmptyChosen';

export const Cart: React.FC = () => {
  const { cartItemsIds } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cartItems, setCartItems] = useState<Phone[]>([]);
  const isCartEmpty = cartItemsIds.length === 0;

  const getPhonesFromServer = useCallback(
    async () => {
      try {
        setIsLoading(true);
        setIsDeleting(true);

        if (isCartEmpty) {
          setCartItems([]);
        } else {
          const phonesFromServer = await getPhonesByIds(cartItemsIds);

          setCartItems(phonesFromServer);
        }
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
        setIsDeleting(false);
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
          <EmptyChosen
            group="products"
            actionText="add"
          />
        ) : (
          <>
            <CartList
              cartItems={cartItems}
              isDeleting={isDeleting}
            />
            <CartForm
              cartItems={cartItems}
              isLoading={isLoading}
            />
          </>
        )}

      </div>
    </div>
  );
};
