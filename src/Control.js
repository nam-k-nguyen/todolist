import React from 'react'
import './css/Control.css'

export default function Control({ handleAddTodo, handleClearTodo}) {
  return (
    <div className='control_container'>
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodo}>Clear Finished</button>
    </div>
  )
}
