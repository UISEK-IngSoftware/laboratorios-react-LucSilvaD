import { Grid } from "@mui/material";
import PokemonCard from "../components/PokemonCard";
import "./pokemonList.css";
import { useState, useEffect } from "react";
import { getPokemonList } from "../services/PokemonServise";

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemonList()
            .then((pokemonsData) => {
                setPokemons(Array.isArray(pokemonsData) ? pokemonsData : []);
            })
            .catch((error) => {
                console.error("Error obteniendo lista de pokemons:", error);
            });
    }, []);

    return (
        <Grid container spacing={2}>
            {pokemons.map((pokemon) => (
                <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                    <PokemonCard pokemon={pokemon} />
                </Grid>
            ))}
        </Grid>
    );
}
