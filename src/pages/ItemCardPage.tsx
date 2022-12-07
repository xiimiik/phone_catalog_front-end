import { useParams } from 'react-router-dom';

import { Grid } from '../components/Grid';
import { GridItem } from '../components/GridItem/GridItem';
import { ProductInfo } from '../components/ProductInfo';

export const ItemCardPage = () => {
  const { phoneId = '' } = useParams();

  return (
    <Grid>
      <GridItem from={1} to={25}>
        <ProductInfo phoneId={phoneId} />
      </GridItem>
    </Grid>
  );
};
