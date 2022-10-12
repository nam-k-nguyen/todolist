import React from 'react'
import './css/TodoCreator.css'

export default function TodoCreator() {
  return (
    <div className='todo_creator_container'>
        <input className="new_name" name="new_name" type="text" placeholder="Enter task name"/>
        <input className="new_desc" name="new_desc" type="text" placeholder="Enter task description (optional)" />
    </div>
  )
}
