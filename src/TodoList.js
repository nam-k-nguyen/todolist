import React from 'react';
import Todo from './Todo';
import './css/TodoList.css';

export default function TodoList({ todos, toggleTodo }) {
  return (
    <div className='list_container'>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      })}
    </div>
  )
}
