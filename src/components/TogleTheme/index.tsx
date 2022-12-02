import { IconButton, Icon } from "@mui/material";
import { useContext } from "react";
import { ThemeDataContext } from "../../contexts/theme-context";
import themeDark from "../../theme/theme-dark";
import themeLight from "../../theme/theme-light";

export default function ToogleThemeButton() {
  const { ThemeDispatch, ThemeState } = useContext(ThemeDataContext);

  function toogleTheme() {
    if (ThemeState.palette.mode === "dark") {
      ThemeDispatch(themeLight);
    } else {
      ThemeDispatch(themeDark);
    }
  }

  return (
    <IconButton size="large" color="inherit" onClick={toogleTheme}>
      <Icon>
        {ThemeState.palette.mode === "dark" ? "light_mode1" : "dark_mode"}
      </Icon>
    </IconButton>
  );
}
