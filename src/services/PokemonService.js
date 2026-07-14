import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;
const ApiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
export const getPokemonList = async () => {
    try {
        const response = await ApiClient.get('/pokemons/');
        return response.data;
    } catch (error) {
        console.error("Error obteniendo lista de pokemons:", error);
        throw error;
    }
}
