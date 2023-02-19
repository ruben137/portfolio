
import { ReactNode, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeContext } from "./ThemeContext";
type ProviderProps = {
  children: ReactNode;
};
export const CustomThemeProvider = ({ children }: ProviderProps) => {
  const defaultDarkMode = () => {
    if (localStorage.getItem("darkMode")) {
      return JSON.parse(localStorage.getItem("darkMode") as string);
    }
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };
  const [darkMode, setDarkMode] = useState(defaultDarkMode());
  const toggleDarkMode = (value:boolean) => {
    setDarkMode(value);
    localStorage.setItem("darkMode", JSON.stringify(value));
  };
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#00b894",
      },
      secondary: {
        main: darkMode ? "#b0bec5" : "#2a2a2a",
      },
    },
  });
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}> {children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
