import { Todo } from "../../types/todo";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import "./styles.scss";

interface TodoWrapperProps {
  addTodo: (text: string) => void;
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleCompleted: (id: number) => void;
  editTodo: (text: string, id: number) => void;
}

// todo wrapper component
export const TodoWrapper = ({ addTodo, todos, deleteTodo, toggleCompleted, editTodo }: TodoWrapperProps) => {

  return (
    <div className="todo-wrapper">
      <TodoForm onAddTodo={addTodo} />
      <ul className="todo-list">
        {todos.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleCompleted={() => toggleCompleted(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={(newText: string) => editTodo(newText,todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};
