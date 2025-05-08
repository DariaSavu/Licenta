// Login.tsx
import { Button, TextField, Typography, Container, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles"; // importă useTheme

interface Props {
  setAuth: (value: boolean) => void;
}

const Login: React.FC<Props> = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const theme = useTheme(); // Folosește useTheme pentru a obține tema

  const handleLogin = () => {
    if (email && password) {
      setAuth(true);
      navigate("/home");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Typography variant="h4" textAlign="center" gutterBottom color={theme.palette.primary.main}>
        Login
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{ backgroundColor: theme.palette.secondary.main }}
        >
          Login
        </Button>
        <Button component={Link} to="/register" sx={{ color: theme.palette.secondary.main }}>
          Register
        </Button>
        <Button
          onClick={() => {
            setAuth(true);
            navigate("/home");
          }}
          sx={{ color: theme.palette.text.primary }}
        >
          Continue without account
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
