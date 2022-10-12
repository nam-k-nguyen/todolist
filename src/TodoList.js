import React from 'react';
import Todo from './Todo';
import './css/TodoList.css';

export default function TodoList({ todos, toggleTodo }) {
  return (
    <div className='todo_list_container'>
      {todos.map((todo) => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />)}
    </div>
  )
}
