import { Grid } from '../components/Grid';
import { GridItem } from '../components/GridItem/GridItem';
import { ProductInfo } from '../components/ProductInfo';

export const ItemCardPage = () => (
  <Grid>
    <GridItem from={1} to={25}>
      <ProductInfo />
    </GridItem>
  </Grid>
);
