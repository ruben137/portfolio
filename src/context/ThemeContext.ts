import { createContext } from "react";
interface ContextProps {
  darkMode: boolean;
  toggleDarkMode: (value:boolean) => void;
}
export const ThemeContext = createContext<ContextProps | undefined>(undefined);
