import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  typography: {
    subtitle1: {
      fontWeight: 100,
    },
    body1: {
      fontWeight: "bold",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 500,
      lg: 900,
      xl: 1200,
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
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
      ],
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
  },
});

const theme = createTheme(defaultTheme, {
  palette: {
    primary: { main: "#ff0000" },
    secondary: { main: "#008000" },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        color: "secondary",
      },
      variants: [
        ...(defaultTheme.components?.MuiButton?.variants ?? []),
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
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
  },
});

export default theme;
