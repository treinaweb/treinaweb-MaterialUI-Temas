import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { CssBaseline } from "@mui/material";
import { ThemeDataProvider } from "./contexts/theme-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeDataProvider>
      <CssBaseline />
      <App />
    </ThemeDataProvider>
  </React.StrictMode>
);
