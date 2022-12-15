import { Box, Button, Rating, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MaterialDetails = ({ posts, fetchPosts, shops }) => {
  const { id } = useParams();
  const [commentCredentials, setCommentCredentials] = useState({});
  const [bookingCredentials, setBookingCredentials] = useState({});
  const [rating, setRating] = useState();
  const navigate = useNavigate();

  const handleChangeRating = e => {
    setRating(e.target.value);
  };

  if (id) {
    fetch("http://localhost:8000/api/posts/" + id).then(response => response.json());
  }

  const handleChangeComment = e => {
    const { name, value } = e.target;
    setCommentCredentials({
      ...commentCredentials,
      [name]: value,
      post: id,
      stars: rating
    });
    console.log(commentCredentials);
  };

  const handleChangeBooking = e => {
    const { name, value } = e.target;
    setBookingCredentials({
      ...bookingCredentials,
      [name]: value,
      post: id
    });
    console.log(bookingCredentials);
  };

  const handleCommentSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:8000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentCredentials)
    })
      .then(response => response.json())
      .then(() => fetchPosts());
  };

  const handleBookingSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:8000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookingCredentials)
    })
      .then(response => response.json())
      .then(() => fetchPosts());
    navigate("/");
  };

  const average = () => {
    let sum = 0;
    let average = 0;
    posts.map(post => {
      if (post._id === id) {
        post.comments.map(comment => {
          sum += comment.stars;
          return sum;
        });
        average = sum / post.comments.length;
      }
    });
    return average;
  };
  average();

  const averageStars = average();

  return (
    <Box>
      {id &&
        posts.map(post => {
          if (post._id === id) {
            return (
              <Box key={post._id} sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginTop: 10
                  }}>
                  <Stack spacing={1}>
                    <Typography variant="h6" component="legend">
                      Votre avis
                    </Typography>
                    <Rating
                      name="half-rating"
                      defaultValue={0}
                      precision={0.5}
                      onChange={handleChangeRating}
                    />
                  </Stack>
                  <TextField
                    variant="outlined"
                    placeholder="Votre nom"
                    name="username"
                    onChange={handleChangeComment}
                    sx={{ marginY: 1 }}
                  />
                  <TextField
                    multiline
                    rows={4}
                    placeholder="Commentaire"
                    name="description"
                    onChange={handleChangeComment}
                    sx={{ width: 500, marginY: 1 }}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleCommentSubmit}
                    sx={{ marginY: 1 }}>
                    Ajouter un commentaire
                  </Button>
                  {post.comments.map(comment => (
                    <Box key={comment._id} sx={{ marginY: 3 }}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={comment.stars}
                        precision={0.5}
                        readOnly
                      />
                      <Typography variant="h5"> {comment.username} </Typography>
                      <Typography variant="body1"> {comment.description} </Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ backgroundColor: "white", height: "50%", padding: 5, marginBottom: 5 }}>
                  <Box
                    component="img"
                    sx={{
                      marginY: "auto",
                      height: "auto",
                      width: 800
                    }}
                    alt={post.title}
                    src={post.imageUrl}
                  />
                  <Box sx={{ marginTop: 5 }}>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        value={averageStars}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                    <Typography sx={{ display: "flex" }} variant="h4">
                      {post.title} {post.style}
                    </Typography>
                    <Typography variant="h5">
                      {post.price} € / Semaine - {post.weight} kg - {post.size} cm
                    </Typography>
                    <Typography variant="body1" sx={{ width: 800, marginY: 5 }}>
                      {post.description}
                    </Typography>
                    <TextField
                      variant="outlined"
                      placeholder="Entrez votre numéro de téléphone"
                      name="telephoneNumber"
                      onChange={handleChangeBooking}
                      sx={{ width: 300, marginY: 1 }}
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleBookingSubmit}
                      sx={{ marginLeft: 3, marginTop: 1, padding: 2, fontSize: 15 }}>
                      Réserver
                    </Button>
                    {shops.map(shop => (
                      <Box
                        key={shop._id}
                        sx={{ display: "flex", alignItems: "center", marginY: 3 }}>
                        <Typography variant="body1" sx={{ marginY: 1 }}>
                          Disponible chez {shop.name} à {shop.address}
                        </Typography>
                        <Box
                          component="img"
                          sx={{ marginX: 2, height: "auto", width: 100 }}
                          src={shop.logoUrl}
                        />
                        <Button
                          variant="contained"
                          sx={{ padding: 2 }}
                          onClick={() => navigate(`/login/${shop._id}`)}>
                          Voir dans la boutique
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            );
          }
          return "";
        })}
    </Box>
  );
};

export default MaterialDetails;
