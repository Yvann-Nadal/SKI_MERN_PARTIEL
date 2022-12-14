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

const FilterBar = () => {
  // const [select, setSelect] = useState("");

  // const handleChange = event => {
  //   setSelect(event.target.value);
  // };

  return (
    <Box></Box>
    // <Box
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     marginTop: 10
    //   }}>
    //   <Typography variant="h4" sx={{ marginRight: 3 }}>
    //     {select}
    //   </Typography>
    //   <TextField
    //     variant="outlined"
    //     label="Rechercher des skis"
    //     sx={{
    //       width: 500,
    //       marginRight: 3
    //     }}
    //   />
    //   <FormControl>
    //     <InputLabel id="weight">Poids (en kg)</InputLabel>
    //     <Select
    //       sx={{ width: 300, marginRight: 3 }}
    //       // value={age}
    //       label="Poids (en kg)"
    //       // onChange={handleChange}
    //     >
    //       <MenuItem value="">(Vide)</MenuItem>
    //       <MenuItem value={10}>Moins de 45kg</MenuItem>
    //       <MenuItem value={20}>Entre 45 et 65kg</MenuItem>
    //       <MenuItem value={30}>Plus de 65kg</MenuItem>
    //     </Select>
    //   </FormControl>
    //   <FormControl>
    //     <InputLabel id="style">Style</InputLabel>
    //     <Select
    //       sx={{ width: 300, marginRight: 3 }}
    //       // value={select}
    //       label="Style"
    //       onChange={handleChange}>
    //       <MenuItem value="">Tous</MenuItem>
    //       <MenuItem value={"Freeride"}>Freeride</MenuItem>
    //       <MenuItem value={"Freestyle"}>Freestyle</MenuItem>
    //       <MenuItem value={"Piste"}>Piste</MenuItem>
    //       <MenuItem value={"Polyvalent"}>Polyvalent</MenuItem>
    //     </Select>
    //   </FormControl>
    //   <FormControl>
    //     <InputLabel id="size">Taille (en cm)</InputLabel>
    //     <Select
    //       sx={{ width: 300 }}
    //       // value={age}
    //       label="Taille (en cm)"
    //       // onChange={handleChange}
    //     >
    //       <MenuItem value="">(Vide)</MenuItem>
    //       <MenuItem value={10}>140</MenuItem>
    //       <MenuItem value={20}>145</MenuItem>
    //       <MenuItem value={30}>150</MenuItem>
    //       <MenuItem value={40}>155</MenuItem>
    //       <MenuItem value={50}>160</MenuItem>
    //       <MenuItem value={60}>165</MenuItem>
    //       <MenuItem value={70}>170</MenuItem>
    //       <MenuItem value={80}>175</MenuItem>
    //       <MenuItem value={90}>180</MenuItem>
    //       <MenuItem value={100}>185</MenuItem>
    //       <MenuItem value={110}>190</MenuItem>
    //     </Select>
    //   </FormControl>
    // </Box>
  );
};

export default FilterBar;
