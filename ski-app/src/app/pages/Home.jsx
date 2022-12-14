import { Box } from "@mui/material";
import MaterialList from "../components/MaterialList";
import FilterBar from "../components/FilterBar";

const Home = ({ posts }) => {
  return (
    <Box>
      {/* <FilterBar /> */}
      <MaterialList posts={posts} />
    </Box>
  );
};

export default Home;
