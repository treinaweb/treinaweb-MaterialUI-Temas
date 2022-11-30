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
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 500,
      lg: 900,
      xl: 1200,
    },
  },
});

export default theme;
