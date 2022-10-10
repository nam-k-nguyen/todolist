import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = 'todolist'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
  const todoNameRef = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(event) {
    const name = todoNameRef.current.value;
    if (name === '') return
    setTodos(currentTodo => [...currentTodo, createTodo(name)])
    todoNameRef.current.value = null;
  }

  function createTodo(todoName) {return {id: uuidv4(), name: todoName, complete: false}}

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Todos</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
