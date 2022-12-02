import { CartItem } from "../components/CartItem/CartItem"
import { Grid } from "../components/Grid"
import { GridItem } from "../components/GridItem"

export const CartPage = () => {
  return (
    <>
      <Grid>
        <GridItem from={1} to={32}>
          <CartItem/>
        </GridItem>
      </Grid>
    </>
  )
}
