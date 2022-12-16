import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LoginForm = ({ shops }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});

  const shop = shops.find(shop => shop._id === id);
  console.log(shop);

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
    console.log(credentials);
  };

  const password = "admin";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
      <Box
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
        <Box component="img" src={shop.logoUrl} alt={shop.name} sx={{ width: "50%" }} />
        <Typography variant="h4" sx={{ my: 3 }}>
          Se connecter
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}>
          <TextField
            variant="outlined"
            type="password"
            name="password"
            label="Mot de passe"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={
              password === credentials.password
                ? () => navigate(`/shop/${shop._id}`)
                : () => alert("Mot de passe incorrect")
            }>
            Se connecter
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
