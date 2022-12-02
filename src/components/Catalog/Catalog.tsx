import { useEffect, useState } from "react";
import { Phone } from "../../types/Phone";
import { getPhones } from "../../api/users";
import { ProductCard } from "../ProductCard";
import s from './Catalog.module.scss'
import { Loader } from "../Loader";

export const Catalog = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPhonesFromServer = async () => {
    try {
      setIsLoading(true)
      const phonesFromServer = await getPhones();

      setPhones(phonesFromServer);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPhonesFromServer();
  }, []);

  return (
    isLoading ? (
      <Loader />
    ) : (
      <div className={s.catalog}>
        {phones.map(({
          id,
          name,
          fullPrice,
          price,
          screen,
          capacity,
          ram,
          year,
          image
        }) => {
          return (
            <ProductCard
              key={id}
              name={name}
              fullPrice={fullPrice}
              price={price}
              screen={screen}
              capacity={capacity}
              ram={ram}
              year={year}
              image={image}
            />
          );
        })}
      </div>
    )
  );
};
