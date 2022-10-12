import React from 'react';
import './css/Todo.css';

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick(event) { toggleTodo(todo.id) }

    return (
        <div className='todo_container'>
            <div className='title'>
                <div className='checkbox'>
                    <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                </div>
                <div className='name'>{todo.name}</div>
            </div>
            <div className='desc'>{todo.desc || 'No description'}</div>
        </div>
    )
}
