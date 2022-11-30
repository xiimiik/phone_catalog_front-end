import { Grid } from "../components/Grid"
import { GridItem } from "../components/GridItem/GridItem";
import { ProductCard } from "../components/ProductCard";

export const CatalogPage = () => {
  return (
    <Grid>
      <GridItem from={1} to={7}>
        <ProductCard />
      </GridItem>

      <GridItem from={7} to={13}>
        <ProductCard />
      </GridItem>

      <GridItem from={13} to={19}>
        <ProductCard />
      </GridItem>

      <GridItem from={19} to={25}>
        <ProductCard />
      </GridItem>
  </Grid>
  )
}