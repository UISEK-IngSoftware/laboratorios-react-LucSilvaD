import { Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState} from "react"
import "./PokemonForm.css";
import { addPokemon } from "../services/PokemonService"

export default function PokemonForm() {
    const navigate = useNavigate();
    const [errorMsg, setError] = useState('');
    const [pokemonData, setPokemonData] = useState({
        name: '',
        type: '',
        weight: '',
        height: '',
        picture: null,
    });

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        if (name === 'picture') {
            setPokemonData({ ...pokemonData, picture: files[0] })
        } else {
            setPokemonData({ ...pokemonData, [name]: value })
        }

    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      addPokemon(pokemonData).then(() => {
        alert("pokemon agregado correctamente");
        navigate('/');
      }).catch((error) => {
        console.error("Error agregando Pokemon", error);
        setError("Error agregando pokemon. Por favor intenta nuevamente.");
      });
    };

    return (
      <>
        <Typography variant="h4" gutterBottom>
          Add a New Pokemon
        </Typography>
        <Box component="form" className="pokemon-form" onSubmit={handleSubmit}>
          <TextField
            name="name"
            onChange={handleChange}
            value={pokemonData.name}
            label="Nombre"
            variant="outlined"
            fullWidth
          />

          <TextField
            name="type"
            onChange={handleChange}
            value={pokemonData.type}
            label="Tipo"
            variant="outlined"
            fullWidth
          />
          <TextField
            name="weight"
            onChange={handleChange}
            value={pokemonData.weight}
            label="Peso"
            variant="outlined"
            type="number"
            fullWidth
          />

          <TextField
            name="height"
            onChange={handleChange}
            value={pokemonData.height}
            label="Altura"
            variant="outlined"
            type="number"
            fullWidth
          />
          {errorMsg && (
            <Typography color="error">
              {errorMsg}
            </Typography>
          )}

          <input type="file" accept="image/*" name="picture" onChange={handleChange}/>
          <Button variant="contained" color="primary" type="submit">
            Guardar Pokemon
          </Button>
        </Box>
      </>
    );
}
