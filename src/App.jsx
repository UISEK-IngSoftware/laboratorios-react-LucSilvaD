import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import PokemonList from "./pages/PokemonList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonForm from "./components/PokemonForm";
import LoginPage from "./pages/LoginPage";
import { logout } from "./services/authService";

function App() {
  return (
    <>
      <Header />
      <Container>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/add" element={<PokemonForm />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>

      </Container>
    </>
  );
}

export default App;
