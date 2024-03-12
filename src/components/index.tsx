import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoWrapper } from "./Todo/TodoWrapper";
import { Header } from "./Header/header";

export const MainComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="container"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <Header />
      <TodoWrapper />
    </div>
  );
};
