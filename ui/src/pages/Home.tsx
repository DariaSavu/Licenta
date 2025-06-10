import { Button, Container, TextField, Typography, Stack, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

interface Props {
  setAuth: (value: boolean) => void;
}

const Home: React.FC = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const navigate = useNavigate();
  const theme = useTheme();


  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await axios.post("http://localhost:5000/clasificare", {
        text,
      });
      setResult(response.data.ans);
    } catch (err) {
      setResult("A apărut o eroare la clasificare.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" color={theme.palette.primary.main} gutterBottom>
        Cu ce te pot ajuta astăzi?
      </Typography>
      <Stack spacing={2}>
        <TextField
          multiline
          minRows={6}
          placeholder="Scrie aici..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />

        {loading ? (
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body1">Se procesează comentariul...</Typography>
            <CircularProgress size={24} />
          </Stack>
        ) : (
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ backgroundColor: theme.palette.secondary.main }}
            >
              Clasifică
            </Button>
          </Stack>
        )}

        {result && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            Rezultat: {result}
          </Typography>
        )}
      </Stack>
    </Container>
  );
};

export default Home;
