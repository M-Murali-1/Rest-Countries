import { createContext, useState } from "react";
export const ThemeSwitcher = createContext();
const ThemeContext = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);
  const toogleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };
  return (
    <ThemeSwitcher.Provider value={toogleTheme}>
        {children}
    </ThemeSwitcher.Provider>
  )
};

export default ThemeContext;
