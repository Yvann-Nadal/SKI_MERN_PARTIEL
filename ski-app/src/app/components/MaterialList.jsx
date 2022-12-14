import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MaterialList = ({ filterPosts }) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {filterPosts
          .filter(post => post.isAvailable === true)
          .map(post => (
            <Box
              key={post._id}
              onClick={() => navigate(`/details/${post._id}`)}
              sx={{
                display: "flex",
                backgroundColor: "white",
                width: "70%",
                m: 3,
                padding: 3,
                cursor: "pointer"
              }}>
              <Box
                component="img"
                sx={{
                  my: "auto",
                  height: 108,
                  width: 655
                }}
                alt={post.title}
                src={post.imageUrl}
              />
              <Box sx={{ my: "auto", ml: 5 }}>
                <Typography sx={{ display: "flex" }} variant="h4">
                  {post.title} {post.style}
                </Typography>
                <Typography variant="h5">
                  {post.price.toFixed(2)} € / Semaine - {post.weight} kg - {post.size} cm
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default MaterialList;
