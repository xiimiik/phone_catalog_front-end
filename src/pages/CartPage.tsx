import { Cart } from '../components/Cart';
import { Grid } from '../components/Grid';
import { GridItem } from '../components/GridItem';

export const CartPage = () => {
  return (
    <>
      <Grid>
        <GridItem from={1} to={25}>
          <Cart />
        </GridItem>
      </Grid>
    </>
  );
};
