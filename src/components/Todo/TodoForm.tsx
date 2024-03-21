import React, { useState } from 'react';
import { Button,Input } from '../common';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

function TodoForm({ onAddTodo }: TodoFormProps) {
  const [newTodoText, setNewTodoText] = useState('');
 
  // this fn will get called on click of Add todo button
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      onAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <Input  
        className='todo-input'
        type="text"
        placeholder="Add a new todo..."
        value={newTodoText}
        onChange={(e:any ) => setNewTodoText(e.target.value)}/>    
      <Button type="primary" label={'Add Todo'} iconId={'add'} onClick={()=>handleSubmit} />
    </form>
  );
}

export default TodoForm;
