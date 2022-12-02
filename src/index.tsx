import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import themeDark from "./theme/theme-dark";
import themeLight from "./theme/theme-light";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
