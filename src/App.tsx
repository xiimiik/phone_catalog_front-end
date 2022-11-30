import { Grid } from "./components/Grid/Grid";
import { GridItem } from "./components/GridItem/GridItem";
import { ProductCard } from "./components/ProductCard";

function App() {
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
};

export default App;
