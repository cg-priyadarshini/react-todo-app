export interface TodoItemProps {
  todo: Todo;
  onToggleCompleted: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (text: string, id: number) => void;
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  isEditing:boolean;
}
