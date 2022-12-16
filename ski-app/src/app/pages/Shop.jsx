import { Box } from "@mui/material";
import ShopDetails from "../components/ShopDetails";

const Shop = ({  fetchPosts, fetchShops, shops }) => {
  return (
    <Box>
      <ShopDetails fetchPosts={fetchPosts} fetchShops={fetchShops} shops={shops} />
    </Box>
  );
};

export default Shop;
