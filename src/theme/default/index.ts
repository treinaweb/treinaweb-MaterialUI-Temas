import { createTheme } from "@mui/material";

const themeDefault = createTheme({
  palette: {
    primary: {
      main: "#734497",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          ":hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});

export default themeDefault;
