
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import "./pokemonCard.css";

export default function PokemonCard({ pokemon }) {
  return (
    <Card>
        <CardMedia
            component="img"
            image={pokemon.image}
            alt={pokemon.name}
            height={200}
        />
        <CardContent>
            <Typography variant="h6" component="div">
                {pokemon.name}
            </Typography>
            <Typography variant="body" color="text.secondary">
                {pokemon.type}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">
                Ver Más
            </Button>
        </CardActions>
    </Card>
  );
}
