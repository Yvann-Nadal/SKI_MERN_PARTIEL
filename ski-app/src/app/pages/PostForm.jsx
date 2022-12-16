import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostForm = ({ fetchPosts, fetchShops, shops }) => {
  const { id } = useParams();
  const shop = shops.find(shop => shop._id === id);
  const [credentials, setCredentials] = useState({});
  const [editMode] = useState(shop ? false : true);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    if (editMode) {
      setCredentials({
        ...credentials,
        [name]: value
      });
      console.log(credentials);
    } else {
      setCredentials({
        ...credentials,
        [name]: value,
        shop: shop._id
      });
      console.log(credentials);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editMode) {
      fetch("http://localhost:8000/api/posts/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(response => response.json())
        .then(() => fetchPosts() && fetchShops());
    } else {
      fetch("http://localhost:8000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(response => response.json())
        .then(() => fetchPosts() && fetchShops());
    }
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      fetch("http://localhost:8000/api/posts/" + id)
        .then(response => response.json())
        .then(data => {
          setCredentials(data);
        });
    }
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {editMode ? "Modifier" : "Créer"} un matériel
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Box sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            value={credentials.title || ""}
            onChange={handleChange}
            name="title"
            placeholder="Nom du matériel"
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <TextField
            variant="outlined"
            value={credentials.imageUrl || ""}
            onChange={handleChange}
            name="imageUrl"
            placeholder="URL de l'image"
            sx={{ width: 700 }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <TextField
            variant="outlined"
            type="number"
            value={credentials.weight || ""}
            onChange={handleChange}
            name="weight"
            placeholder="Poids (en kg)"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <TextField
            variant="outlined"
            type="number"
            value={credentials.size || ""}
            onChange={handleChange}
            name="size"
            placeholder="Taille (en cm)"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <TextField
            variant="outlined"
            value={credentials.style || ""}
            onChange={handleChange}
            name="style"
            placeholder="Style"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <TextField
            variant="outlined"
            type="number"
            value={credentials.price || ""}
            onChange={handleChange}
            name="price"
            placeholder="Prix"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            value={credentials.description || ""}
            onChange={handleChange}
            name="description"
            placeholder="Description"
            sx={{ width: 500 }}
          />
        </Box>
        <Button
          variant="contained"
          color={editMode ? "primary" : "secondary"}
          size="large"
          type="submit"
          sx={{ px: 5, fontSize: 20 }}>
          {editMode ? "Modifier" : "Créer"}
        </Button>
      </Box>
    </Box>
  );
};

export default PostForm;
