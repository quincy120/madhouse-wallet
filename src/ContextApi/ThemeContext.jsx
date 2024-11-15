// context/ThemeContext.js

import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme to 'dark' by default, or use the theme from localStorage
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "dark"
      : "dark"
  );

  // Define theme variables
  const themeVariables = {
    light: {
      backgroundColor: "#fff",
      textColor: "#000000",
      textColor2: "#383838",
      cardBg: "#e3ffe9",
      cardBg2: "#e3ffe9",
      lightBtn: "#b8b8b8",
    },
    dark: {
      backgroundColor: "#0d1017",
      textColor: "#fff",
      textColor2: "#fff",
      cardBg: "#101d13",
      cardBg2: "#000",
      lightBtn: "#424040",
    },
  };

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply the theme variables to the root element
  useEffect(() => {
    const root = document.documentElement;
    const currentTheme = themeVariables[theme];

    // Set CSS variables based on the current theme
    Object.entries(currentTheme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
