import { Box } from "@mui/material";
import ShopDetails from "../components/ShopDetails";

const Shop = ({ posts, fetchPosts, shops }) => {
  return (
    <Box>
      <ShopDetails posts={posts} fetchPosts={fetchPosts} shops={shops} />
    </Box>
  );
};

export default Shop;
