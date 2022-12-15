import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const ShopDetails = ({ posts, shops }) => {
  const { id } = useParams();

  console.log(posts);

  const shop = shops.find(shop => shop._id === id);

  console.log("shop :", shop);

  return (
    <Box sx={{}}>
      <Box sx={{ backgroundColor: "#2D2D2D", width: "100vw" }}>
        <Box component="img" src={shop.logoUrl} alt={shop.name} sx={{ padding: 3, width: "5%" }} />
      </Box>

      {shop.posts.map(post => (
        <Box
          key={post._id}
          sx={{
            display: "flex",
            backgroundColor: "white",
            width: "70%",
            margin: 3,
            padding: 3
          }}>
          <Box
            component="img"
            sx={{
              marginY: "auto",
              height: 108,
              width: 655
            }}
            alt={post.title}
            src={post.imageUrl}
          />
          <Box sx={{ marginY: "auto", marginLeft: 5 }}>
            <Typography sx={{ display: "flex" }} variant="h4">
              {post.title} {post.style}
            </Typography>
            <Typography variant="h5">
              {post.price} € / Semaine - {post.weight} kg - {post.size} cm
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ShopDetails;
