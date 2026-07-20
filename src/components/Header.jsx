import { Container, AppBar, Toolbar, Button } from "@mui/material";
import pokedexLogo from "../assets/pokedex-logo.png";
import "./Header.css";
import { isLoggedIn, logout } from "../services/authService";

export default function Header() {

    const handleLogout = async () => {
        await logout();
        alert("Sesión cerrada correctamente");
        window.location.href = "/";

    }

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
              {isLoggedIn() && (
                <>
                  <Button color="inherit" href="/add">
                    Nuevo Pokémon
                  </Button>
                  <Button color="inherit" onClick={handleLogout}>
                    Cerrar sesión
                  </Button>
                </>
              )}
              {!isLoggedIn() && (
                <Button color="inherit" href="/login">
                  iniciar sesión
                </Button>
              )}
            </Toolbar>
          </AppBar>
        </Container>
      </header>
    );
}
