import React, { useState, useEffect } from "react";
import { Todo } from "../../types/todo";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import "./styles.scss";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") ?? "[]") as Todo[];
    setTodos(savedTodos);
  }, []);

  const addTodo = (text: string) => {
    const newTodos = [
      ...todos,
      { id: Date.now(), text, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (text: string, id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleCompleted = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="todo-wrapper">
      <TodoForm onAddTodo={addTodo} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleCompleted={() => toggleCompleted(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={editTodo}
          />
        ))}
      </ul>
    </div>
  );
};
