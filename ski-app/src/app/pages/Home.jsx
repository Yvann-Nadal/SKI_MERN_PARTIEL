import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import MaterialList from "../components/MaterialList";
import { useEffect, useState } from "react";

const Home = ({ posts }) => {
  const [filterPosts, setFilterPosts] = useState([]);

  const searchFilter = value => {
    const filtered = posts.filter(post => post.title.toLowerCase().includes(value.toLowerCase()));
    console.log(filtered);
    setFilterPosts(filtered);
  };

  const weightFilter = value => {
    console.log(typeof value);
    if (value === "-45") {
      const filtered = posts.filter(post => post.weight < 45);
      setFilterPosts(filtered);
    } else if (value === "45 et 65") {
      const filtered = posts.filter(post => post.weight >= 45 && post.weight <= 65);
      setFilterPosts(filtered);
    } else if (value === "+65") {
      const filtered = posts.filter(post => post.weight > 65);
      setFilterPosts(filtered);
    } else {
      setFilterPosts(posts);
    }
  };

  console.log(filterPosts);

  const styleFilter = value => {
    const filtered = posts.filter(post => post.style.includes(value));
    setFilterPosts(filtered);
  };

  const sizeFilter = value => {
    if (value === "140") {
      const filtered = posts.filter(post => post.size === 140);
      setFilterPosts(filtered);
    } else if (value === "145") {
      const filtered = posts.filter(post => post.size === 145);
      setFilterPosts(filtered);
    } else if (value === "150") {
      const filtered = posts.filter(post => post.size === 150);
      setFilterPosts(filtered);
    } else if (value === "155") {
      const filtered = posts.filter(post => post.size === 155);
      setFilterPosts(filtered);
    } else if (value === "160") {
      const filtered = posts.filter(post => post.size === 160);
      setFilterPosts(filtered);
    } else if (value === "165") {
      const filtered = posts.filter(post => post.size === 165);
      setFilterPosts(filtered);
    } else if (value === "170") {
      const filtered = posts.filter(post => post.size === 170);
      setFilterPosts(filtered);
    } else if (value === "175") {
      const filtered = posts.filter(post => post.size === 175);
      setFilterPosts(filtered);
    } else if (value === "180") {
      const filtered = posts.filter(post => post.size === 180);
      setFilterPosts(filtered);
    } else if (value === "185") {
      const filtered = posts.filter(post => post.size === 185);
      setFilterPosts(filtered);
    } else if (value === "190") {
      const filtered = posts.filter(post => post.size === 190);
      setFilterPosts(filtered);
    } else {
      setFilterPosts(posts);
    }
  };

  useEffect(() => {
    setFilterPosts(posts);
  }, [posts]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10
        }}>
        <TextField
          variant="outlined"
          label="Rechercher des skis"
          onChange={e => searchFilter(e.target.value)}
          sx={{
            width: 500,
            marginRight: 3
          }}
        />
        <FormControl>
          <InputLabel id="weight">Poids (en kg)</InputLabel>
          <Select
            sx={{ width: 300, marginRight: 3 }}
            label="Poids (en kg)"
            onChange={e => weightFilter(e.target.value)}>
            <MenuItem value="">Tout les poids</MenuItem>
            <MenuItem value={"-45"}>Moins de 45kg</MenuItem>
            <MenuItem value={"45 et 65"}>Entre 45 et 65kg</MenuItem>
            <MenuItem value={"+65"}>Plus de 65kg</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="style">Style</InputLabel>
          <Select
            sx={{ width: 300, marginRight: 3 }}
            label="Style"
            onChange={e => styleFilter(e.target.value)}>
            <MenuItem value="">Tous</MenuItem>
            <MenuItem value={"Freeride"}>Freeride</MenuItem>
            <MenuItem value={"Freestyle"}>Freestyle</MenuItem>
            <MenuItem value={"Piste"}>Piste</MenuItem>
            <MenuItem value={"Polyvalent"}>Polyvalent</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="size">Taille (en cm)</InputLabel>
          <Select
            sx={{ width: 300 }}
            label="Taille (en cm)"
            onChange={e => sizeFilter(e.target.value)}>
            <MenuItem value="">Toutes tailles</MenuItem>
            <MenuItem value={"140"}>140</MenuItem>
            <MenuItem value={"145"}>145</MenuItem>
            <MenuItem value={"150"}>150</MenuItem>
            <MenuItem value={"155"}>155</MenuItem>
            <MenuItem value={"160"}>160</MenuItem>
            <MenuItem value={"165"}>165</MenuItem>
            <MenuItem value={"170"}>170</MenuItem>
            <MenuItem value={"175"}>175</MenuItem>
            <MenuItem value={"180"}>180</MenuItem>
            <MenuItem value={"185"}>185</MenuItem>
            <MenuItem value={"190"}>190</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <MaterialList filterPosts={filterPosts} />
    </Box>
  );
};

export default Home;
