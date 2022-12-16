import { Box, Typography } from "@mui/material";

const BookingList = ({ posts, shops }) => {
  const shop = shops.find(shop => shop._id);

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
        <Box sx={{ my: "auto", mr: 5 }}></Box>
      </Box>
      <Typography sx={{ display: "flex", justifyContent: "center", fontSize: 30, mt: 5 }}>
        Liste des réservations
      </Typography>
      {posts.map(post => (
        <Box key={post._id} sx={{ display: "flex", justifyContent: "center" }}>
          {post.isAvailable === false ? (
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
            </Box>
          ) : (
            <Box></Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default BookingList;
