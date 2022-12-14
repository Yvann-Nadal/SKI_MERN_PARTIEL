import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MaterialDetails from "../components/MaterialDetails";

const Details = ({ posts, fetchPosts }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        color="secondary"
        sx={{ marginLeft: 19, marginTop: 10 }}>
        Retour
      </Button>

      <MaterialDetails posts={posts} fetchPosts={fetchPosts} />
    </Box>
  );
};

export default Details;
