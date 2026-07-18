import { Box, Typography, TextField, Button } from '@mui/material';
import './LoginPage.css';

export default function LoginPage() {
  return (
    <Box component='form' className='login-form'>
        <Typography variant='h5' gutterBottom>
          Inicio de sesión
        </Typography>
        <TextField
            label="Usuario"
            name="username"
            variant="outlined"
            fullWidth
            required
        />

        <TextField
            label="Contraseña"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            required
        />
        <Button variant="contained" color="primary" type="submit">
            Iniciar sesión
        </Button>
    </Box>
  );
}
