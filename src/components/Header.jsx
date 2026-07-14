import { Container, AppBar, Toolbar, Button } from "@mui/material";
import pokedexLogo from "../assets/pokedex-logo.png";
import "./Header.css";

export default function Header() {
    return (
        <header className="pokedex-header">
            <Container>
                <AppBar position="static">
                    <Toolbar>
                        <div className="image-container">
                            <img src={pokedexLogo} alt="Pokedex Logo" height={100} />
                        </div>
                    </Toolbar>
                    <Toolbar>
                        <Button color="inherit" href="/">
                            Inicio
                        </Button>
                        <Button color="inherit" href="/add">
                            Agregar Pokemon
                        </Button>
                    </Toolbar>
                </AppBar>
            </Container>
        </header>
    )
}
