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
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        color: "secondary",
      },
      styleOverrides: {
        root: {
          backgroundColor: "#ff0000",
          ":hover": {
            backgroundColor: "#f012ff",
          },
        },
      },
      variants: [
        {
          props: {
            variant: "contained",
          },
          style: {
            backgroundColor: "blue",
            ":hover": {
              backgroundColor: "red",
            },
          },
        },
        {
          props: {
            variant: "outlined",
            color: "secondary",
          },
          style: {
            padding: "24px 40px",
          },
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
  },
});

export default theme;
