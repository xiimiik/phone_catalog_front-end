import { useParams } from 'react-router-dom';

import { Cart } from '../components/Cart';
import { Grid } from '../components/Grid';
import { GridItem } from '../components/GridItem';

export const CartPage = () => {
  const { phoneId = '' } = useParams();

  return (
    <>
      <Grid>
        <GridItem from={1} to={25}>
          <Cart phoneId={phoneId} />
        </GridItem>
      </Grid>
    </>
  );
};
