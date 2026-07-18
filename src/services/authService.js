import axios from "axios";

const AUTH_BASE_URL = import.meta.env.VITE_AUTH_BASE_URL;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

const authClient = axios.create({
  baseURL: AUTH_BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export const login = async (username, password) => {
    try {
        const response = await authClient.post("/login", {
          username: username,
          password: password,
          grant_type: "password",
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        });
        return response.data;
    } catch (error) {
        throw new Error("Error during login: " + error.message);
    }
}


