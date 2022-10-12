import React from 'react';
import './css/Display.css';

export default function Display({ numberOfTaskLeft }) {
  return (
    <div className='display_container'>
      <div className='task_left_container'>
        You have&nbsp;
        <span className='task_left_number'>{' ' + numberOfTaskLeft + ' '}</span>
        &nbsp;unfinished tasks
      </div>
    </div>
  )
}
