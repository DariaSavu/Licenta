import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#775253",
    },
    secondary: {
      main: "#351431",
    },
    background: {
      default: "#DFE0DC",
    },
    text: {
      primary: "#351431",
      secondary: "#775253",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

export default theme;