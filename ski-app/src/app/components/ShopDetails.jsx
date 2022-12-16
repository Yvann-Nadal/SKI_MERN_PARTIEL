import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const ShopDetails = ({ fetchPosts, fetchShops, shops }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const shop = shops.find(shop => shop._id === id);

  const handleDelete = event => {
    event.preventDefault();
    fetch("http://localhost:8000/api/posts/" + event.target.value, {
      method: "DELETE"
    })
      .then(() => fetchPosts() && fetchShops());
  };

  console.log(
    shop.posts.map(post => (
      <Box key={post._id} sx={{ display: "flex", justifyContent: "center" }}>
        {post.isAvailable ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "white",
              width: "70%",
              m: 3,
              padding: 3
            }}></Box>
        ) : (
          <Box></Box>
        )}
      </Box>
    ))
  );

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#9FA7B2",
          width: "100vw"
        }}>
        <Box component="img" src={shop.logoUrl} alt={shop.name} sx={{ padding: 3, width: "7%" }} />
        <Box sx={{ my: "auto", mr: 5 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate(`/shop/${shop._id}/post/create`)}
            sx={{ px: 5, fontSize: 20 }}>
            Créer
          </Button>
        </Box>
      </Box>

      {shop.posts.map(post => (
        <Box key={post._id} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "white",
              width: "70%",
              m: 3,
              padding: 3
            }}>
            <Box sx={{ display: "flex" }}>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center"
              }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate(`/shop/${shop._id}/post/update/${post._id}`)}
                sx={{ mb: 2 }}>
                Modifier
              </Button>
              <Button variant="contained" color="error" value={post._id} onClick={handleDelete}>
                Supprimer
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ShopDetails;
