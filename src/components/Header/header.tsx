

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import { Button } from "../common";
import { Todo } from "../../types/todo";

export const Header = ({ todos }: { todos: Todo[] }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="header" style={{ backgroundColor: theme.headerColor }}>
     <img src="/todo-logo.png" height={40} alt="logo"/>
       
      <div className="header-title">
        <h1>TODO LIST</h1>
        <ThemeSwitcher />
       </div>

            <div className="notification-wrapper">
                <Button label="Total Count" type={"primary"} />
            <span className="count">{todos.length}</span>
            </div>

       
      </div>
  );
};


