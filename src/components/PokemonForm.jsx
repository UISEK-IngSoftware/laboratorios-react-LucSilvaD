import { Box, TextField, Typography, Button } from "@mui/material";
import "./PokemonForm.css";

export default function PokemonForm() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Add a New Pokemon
            </Typography>
            <Box
            component="form"
            className="pokemon-form"
            >
                <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                />

                <TextField
                    label="Tipo"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Peso"
                    variant="outlined"
                    type="number"
                    fullWidth
                />

                <TextField
                    label="Altura"
                    variant="outlined"
                    type="number"
                    fullWidth
                />
                <input type="file" accept="image/*" name="picture" />
                <Button variant="contained" color="primary" type="submit">
                    Guardar Pokemon
                </Button>

            </Box>
        </>
    );
}
