import { Grid } from '../components/Grid';
import { GridItem } from '../components/GridItem';
import { Favourites } from '../components/Favourites';

export const FavoritesPage = () => {
  return (
    <Grid>
      <GridItem from={1} to={25}>
        <Favourites />
      </GridItem>
    </Grid>
  );
};
