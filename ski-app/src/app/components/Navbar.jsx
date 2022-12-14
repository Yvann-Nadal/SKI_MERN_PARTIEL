import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [style, setStyle] = useState("");

  const handleChange = (event) => {
    setStyle(event.target.value);
  };

    return ( 
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10
        }}>
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
            value={style}
            label="Style"
            onChange={handleChange}
          >
            <MenuItem value="">(Vide)</MenuItem>
            <MenuItem value={10}>Freeride</MenuItem>
            <MenuItem value={20}>Freestyle</MenuItem>
            <MenuItem value={30}>Piste</MenuItem>
            <MenuItem value={40}>Polyvalent</MenuItem>
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
     );
}
 
export default Navbar;