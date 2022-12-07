import { Grid } from '../components/Grid';
import { GridItem } from '../components/GridItem';
import { Favourites } from '../components/Favourites';
import { PageSection } from '../components/PageSection';

export const FavoritesPage = () => {
  return (
    <Grid>
      <GridItem from={1} to={25}>
        <PageSection>
          <Favourites />
        </PageSection>
      </GridItem>
    </Grid>
  );
};
