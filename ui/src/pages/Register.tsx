// pages/Register.tsx
import { Button, TextField, Typography, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles"; // Importă useTheme pentru a accesa tema

interface Props {
  setAuth: (value: boolean) => void;
}

const Register: React.FC<Props> = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const theme = useTheme(); // Folosește useTheme pentru a obține tema

  const handleRegister = () => {
    if (name && email && password) {
      setAuth(true);
      navigate("/home");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Typography variant="h4" textAlign="center" gutterBottom color={theme.palette.primary.main}>
        Register
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleRegister}
          sx={{ backgroundColor: theme.palette.secondary.main }}
        >
          Register
        </Button>
      </Stack>
    </Container>
  );
};

export default Register;
