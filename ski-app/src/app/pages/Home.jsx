import { Box } from "@mui/material";
import MaterialList from "../components/MaterialList";
import Navbar from "../components/Navbar";

const Home = ({ posts }) => {
  return (
    <Box>
      <Navbar />
      <MaterialList posts={posts} />
    </Box>
  );
};

export default Home;
