import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import Display from './Display';
import Control from './Control';
import TodoCreator from './TodoCreator';
import './css/App.css';

const LOCAL_STORAGE_KEY = 'todolist'

function App() {

  // 
  // HOOKS
  // 

  // State to store every todo item added by user
  const [todos, setTodos] = useState([]);

  // Load todo list from local storage 
  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodo) setTodos(storedTodo);
  }, []);

  // Store the todo list into local storage 
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(event) {
    const name = todoNameRef.current.value;
    if (name === '') return
    setTodos(currentTodo => [...currentTodo, createTodo(name)])
    todoNameRef.current.value = null;
  // 
  // FUNCTIONS 
  // 

  // Function to add a new todo given the name and description
  }

  
  function todoLeft() {return todos.filter(todo => !todo.complete)}
  
  function createTodo(todoName) {return {id: uuidv4(), name: todoName, complete: false}}
  // Function to clear the finished todos
  function handleClearTodo() { setTodos(todoLeft()) }

  // Function to return the number of uncleared todos
  // Function to generate the todo object given name and description

  // Function to change the complete state of a todo given its id
  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  return (
    <>
      <Display numberOfTaskLeft={todoLeft().length} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <TodoCreator />
      <Control
        handleAddTodo={handleAddTodo}
        handleClearTodo={handleClearTodo}
      />
    </>
  );
}

export default App;
