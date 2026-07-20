import { Box, Typography, TextField, Button } from '@mui/material';
import { login } from '../services/authService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password).then((Response) => {
      localStorage.setItem('token', Response.access_token);
      navigate('/');
    }).catch((error) => {
      console.log('Error en login:', error);
      setError('Error de inicio de sesión: ' + error.message);
    });
  };

  return (
    <Box component='form' className='login-form' onSubmit={handleSubmit}>
        <Typography variant='h5' gutterBottom>
          Inicio de sesión
        </Typography>
        <TextField
            label="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            variant="outlined"
            fullWidth
            required
        />

        <TextField
            label="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" color="primary" type="submit">
            Iniciar sesión
        </Button>
    </Box>
  );
}

