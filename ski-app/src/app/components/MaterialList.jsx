import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MaterialList = ({ posts }) => {
  const navigate = useNavigate();
  const [select, setSelect] = useState("");

  const handleChange = event => {
    setSelect(event.target.value);
  };

  const skis = [
    { id: 1, style: "Skis Freeride" },
    { id: 2, style: "Skis Freestyle" },
    { id: 3, style: "Skis de Piste" },
    { id: 4, style: "Skis Polyvalent" }
  ];

  const filterSkis = skis.map(ski => {
    return ski.style;
  });

  console.log("filterSkis :", filterSkis);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10
        }}>
        <Typography variant="h4" sx={{ marginRight: 3 }}>
          {select}
        </Typography>
        <TextField
          variant="outlined"
          label="Rechercher des skis"
          sx={{
            width: 500,
            marginRight: 3
          }}
        />
        <FormControl>
          <InputLabel id="weight">Poids (en kg)</InputLabel>
          <Select
            sx={{ width: 300, marginRight: 3 }}
            // value={age}
            label="Poids (en kg)"
            // onChange={handleChange}
          >
            <MenuItem value="">(Vide)</MenuItem>
            <MenuItem value={10}>Moins de 45kg</MenuItem>
            <MenuItem value={20}>Entre 45 et 65kg</MenuItem>
            <MenuItem value={30}>Plus de 65kg</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="style">Style</InputLabel>
          <Select
            sx={{ width: 300, marginRight: 3 }}
            // value={select}
            // defaultValue={"Freeride"}
            label="Style"
            onChange={handleChange}>
            <MenuItem value="">Tous</MenuItem>
            <MenuItem value={"Skis Freeride"}>Skis Freeride</MenuItem>
            <MenuItem value={"Skis Freestyle"}>Skis Freestyle</MenuItem>
            <MenuItem value={"Skis de Piste"}>Skis de Piste</MenuItem>
            <MenuItem value={"Skis Polyvalent"}>Skis Polyvalent</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="size">Taille (en cm)</InputLabel>
          <Select
            sx={{ width: 300 }}
            // value={age}
            label="Taille (en cm)"
            // onChange={handleChange}
          >
            <MenuItem value="">(Vide)</MenuItem>
            <MenuItem value={10}>140</MenuItem>
            <MenuItem value={20}>145</MenuItem>
            <MenuItem value={30}>150</MenuItem>
            <MenuItem value={40}>155</MenuItem>
            <MenuItem value={50}>160</MenuItem>
            <MenuItem value={60}>165</MenuItem>
            <MenuItem value={70}>170</MenuItem>
            <MenuItem value={80}>175</MenuItem>
            <MenuItem value={90}>180</MenuItem>
            <MenuItem value={100}>185</MenuItem>
            <MenuItem value={110}>190</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {posts
          .filter(post => post.isAvailable === true)
          .map(post => (
            <Box
              key={post._id}
              onClick={() => navigate(`/details/${post._id}`)}
              sx={{
                display: "flex",
                backgroundColor: "white",
                width: "70%",
                margin: 3,
                padding: 3,
                cursor: "pointer"
              }}>
              {filterSkis.map(ski => {
                if (post.style === select || select === "") {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        backgroundColor: "white",
                        width: "70%",
                        margin: 3,
                        padding: 3,
                        cursor: "pointer"
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
                          {post.style} {post.title}
                        </Typography>
                        <Typography variant="h5">
                          {post.price} € / Semaine - {post.size} cm
                        </Typography>
                      </Box>
                    </Box>
                  );
                }
              })}
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default MaterialList;
