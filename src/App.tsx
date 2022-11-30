import { Link, Route, Routes } from "react-router-dom";
import { Grid } from "./components/Grid/Grid";
import { GridItem } from "./components/GridItem/GridItem";
import { ProductCard } from "./components/ProductCard";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/phones">Phones</Link>

      <Routes>
        <Route path="/" element={<span>123</span>} />
        <Route path="/phones" element={
        <>
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
        </>}>

        </Route>
      </Routes>
    </>
  )
};

export default App;
