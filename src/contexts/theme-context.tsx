import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Theme, createTheme, ThemeProvider } from "@mui/material";
import themeLight from "../theme/theme-light";
import themeDark from "../theme/theme-dark";

interface ThemeDataContextInterface {
  ThemeState: Theme;
  ThemeDispatch: Dispatch<SetStateAction<Theme>>;
}

const inicialValue: ThemeDataContextInterface = {
  ThemeState: createTheme({}),
  ThemeDispatch: () => {},
};

export const ThemeDataContext = createContext(inicialValue);

export const ThemeDataProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState(themeLight);

  return (
    <ThemeDataContext.Provider
      value={{ ThemeDispatch: setTheme, ThemeState: theme }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeDataContext.Provider>
  );
};
