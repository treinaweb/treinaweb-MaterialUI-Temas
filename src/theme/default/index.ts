import { createTheme } from "@mui/material";

const theme = createTheme({
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
    },
  },
});

export default theme;
