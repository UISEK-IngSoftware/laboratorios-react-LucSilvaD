import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import PokemonList from "./pages/PokemonList";

function App() {
  return (
    <>
      <Header />
      <Container>
        <PokemonList />
      </Container>
    </>
  );
}

export default App;
