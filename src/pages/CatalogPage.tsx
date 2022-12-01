import { Pagination } from "../components/Pagination/Pagination";
import { Grid } from "../components/Grid"
import { GridItem } from "../components/GridItem/GridItem";
import { ProductCard } from "../components/ProductCard";

export const CatalogPage = () => {
  return (
    <>
      <Grid>
        <GridItem from={1} to={7}>
          <ProductCard />
        </GridItem>
      </Grid>

      <Pagination />
    </>
  )
}