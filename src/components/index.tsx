import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoWrapper } from "./Todo/TodoWrapper";
import { Header } from "./Header/header";
import { Todo } from "../types/todo";

export const MainComponent = () => {
  const { theme } = useContext(ThemeContext);
 const [todos, setTodos] = useState<Todo[]>([]);
  // fetch saved todo items
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") ?? "[]") as Todo[];
    setTodos(savedTodos);
  }, []);

  // add todo item
  const addTodo = (text: string) => {
    const newTodos = [
      ...todos,
      { id: Date.now(), text, completed: false, isEditing: false },
    ];
    // dispatch(addTodoAction(text))
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // edit particular todo item based on id
  const editTodo = (text: string, id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // mark todo item as completed 
  const toggleCompleted = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // delete particular todo based on id
  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  return (
    <div
      className="container"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <Header todos={todos}/>
      <TodoWrapper addTodo={addTodo} todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} editTodo={editTodo}/>
    </div>
  );
};
