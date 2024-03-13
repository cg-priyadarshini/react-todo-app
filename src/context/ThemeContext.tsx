import React, { createContext, useState } from 'react';
import { Theme, ThemeContextProps } from '../types/theme';
import { lightTheme } from '../components/Theme/ThemeSwitcher';

const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  setTheme: (newTheme: Theme) => {},
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  
  // update theme
  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
