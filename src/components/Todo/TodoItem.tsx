import { useState, useRef } from "react";
import { TodoItemProps } from "../../types/todo";
import { Button, Input } from "../common";
import {Tooltip} from 'react-tooltip';
import useTextEllipsis from "../../hooks/useTextEllipsis";
const TodoItem = ({
  todo,
  onToggleCompleted,
  onDelete,
  onEdit,
}: TodoItemProps) => {
  const [editText, setEditText] = useState(todo.text);
  const ref = useRef<HTMLSpanElement>(null);
  const { ellipsisText, tooltipContent } = useTextEllipsis({ text: editText, maxLength: 32, showTooltip: true });

  return (
    <div className="todo-item">
      <div className="todo-item-info">
        <Input
          checked={todo.completed}
          onChange={(e) => onToggleCompleted(todo.id)}
          type={"checkbox"}
        />

        {todo.isEditing ? (
          <Input
            className="todo-input"
            type="text"
            placeholder="Add a new todo..."
            value={editText}
            onChange={(e: any) => setEditText(e.target.value)}
          />
        ) : (
          <><span className={`todo-text ${todo.completed ? "completed" : ""}`} ref={ref} data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent}>
                {ellipsisText}
            </span> {
                tooltipContent ? <Tooltip id="my-tooltip" /> : ''}
            </>
        )}
      </div>
      <div className="todo-item-actions">
        <Button
          className="todo-item-actions-btn"
          type="outline"
          iconId={todo.isEditing ? "save" : "edit"}
          onClick={() => onEdit(editText, todo.id)}
        />
        <Button
          className="todo-item-actions-btn"
          type="outline"
          iconId={"delete"}
          onClick={() => onDelete(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
