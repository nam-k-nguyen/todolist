import React from 'react';
import './css/Todo.css';

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick(event) {toggleTodo(todo.id)}

    return (
        <div className='container'>
            <div className='checkbox'>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            </div>
            <div className='name'>{todo.name}</div>
        </div>
    )
}
