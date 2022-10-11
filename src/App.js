import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import './css/App.css';

const LOCAL_STORAGE_KEY = 'todolist'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodo) setTodos(storedTodo);
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(event) {
    const name = todoNameRef.current.value;
    if (name === '') return
    setTodos(currentTodo => [...currentTodo, createTodo(name)])
    todoNameRef.current.value = null;
  }

  function handleClearTodo() {setTodos(todoLeft())}
  
  function todoLeft() {return todos.filter(todo => !todo.complete)}
  
  function createTodo(todoName) {return {id: uuidv4(), name: todoName, complete: false}}

  function toggleTodo(id) { 
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodo}>Clear Finished</button>
      <div>{todoLeft().length} left to do</div>
    </>
  );
}

export default App;
