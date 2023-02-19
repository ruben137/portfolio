

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useDarkMode = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
};

export default useDarkMode;
