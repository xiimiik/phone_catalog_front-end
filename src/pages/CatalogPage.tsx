import { Grid } from "../components/Grid"
import { GridItem } from "../components/GridItem/GridItem";

import { Catalog } from "../components/Catalog";

export const CatalogPage = () => {
  return (
    <>
      <Grid>
        <GridItem from={1} to={25}>
          <Catalog />
        </GridItem>
      </Grid>
    </>
  )
}