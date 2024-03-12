

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="header" style={{ backgroundColor: theme.headerColor }}>
     <img src="/todo-logo.png" height={40} alt="logo"/>
       
      <div className="header-title">
        <h1>TODO LIST</h1>
        <ThemeSwitcher />

       </div>
       
      </div>
  );
};


