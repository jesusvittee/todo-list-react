import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';


function App() {
  const {item:todos, saveItem:saveTodos, loading, error} =useLocalStorage('TODOS_V1', []);

  const [todoFind, setTodoFind] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchesTodos = todos.filter((todo)=>{
    const todoText = todo.text.toLowerCase();
    const searchText = todoFind.toLowerCase()
    return todoText.includes(searchText)
  });


  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
        (todo)=>todo.text === text
  )
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed
  saveTodos(newTodos)
 }

  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
        (todo)=>todo.text === text
    );
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

return (<AppUI
  loading={loading}
  error={error}
  completedTodos={completedTodos}
  totalTodos={totalTodos}
  todoFind={todoFind}
  setTodoFind={setTodoFind}
  searchesTodos={searchesTodos}
  completeTodo={completeTodo}
  deleteTodo={deleteTodo}
/>)
 }


export default App;
// const defaultTodos = [
//   { text: 'Cortar una cebolla', completed: false },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Aprender frances', completed: false },
//   { text: 'Cortar una cebolla y chiles', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js y no parar de aprender', completed: false },
//   { text: 'Llorar con la Llorona mientras lavo la ropa en el rio', completed: false },
//   { text: 'Aprender ingles mientras duermo', completed: false },
// ];

// localStorage.setItem('TODOS_V1', 'defaultTodos')