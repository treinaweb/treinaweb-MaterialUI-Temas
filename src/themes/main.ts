import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#ff0000" },
    secondary: { main: "#008000" },
  },
  typography: {
    subtitle1: {
      fontWeight: 100,
    },
    body1: {
      fontWeight: "bold",
    },
  },
  spacing: 8,
});

export default theme;
