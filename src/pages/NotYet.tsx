import { Grid } from '../components/Grid';
import { GridItem } from '../components/GridItem';

export const NotYet = () => {
  return (
    <Grid>
      <GridItem from={1} to={25}>
        <h1 className="title">Not Yet</h1>
      </GridItem>
    </Grid>
  );
};
