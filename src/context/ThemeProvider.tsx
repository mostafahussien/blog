import React, { useState, createContext, memo, useEffect } from "react";

import { isServer } from "@app/helpers/util.helpers";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [mode, setTheme] = useState("light");

  const checkDarkMode = () => {
    if (!isServer) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    }
  };

  useEffect(() => {
    checkDarkMode();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setTheme: () => setTheme(mode === "dark" ? "light" : "dark"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default memo(ThemeProvider);
