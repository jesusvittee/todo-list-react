import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Burbuja } from './Burbuja.js';
import {TodoHeader} from './TodoHeader';


const defaultTodos = [
  { text: 'Cortar una cebolla', completed: false },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'Aprender frances', completed: false },
  { text: 'Cortar una cebolla y chiles', completed: false },
  { text: 'Tomar el Curso de Intro a React.js y no parar de aprender', completed: false },
  { text: 'Llorar con la Llorona mientras lavo la ropa en el rio', completed: false },
  { text: 'Aprender ingles mientras duermo', completed: false },
];

function App() {
  const [todos, setTodos]=React.useState(defaultTodos);
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
        (todo)=>todo.text == text
  )
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed
  setTodos(newTodos)
}

      
  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
        (todo)=>todo.text == text
    );
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <>
    <TodoHeader>
    <Burbuja/>
      <TodoCounter completed={completedTodos} total={totalTodos} />
    </TodoHeader>
      <TodoSearch todoFind={todoFind} setTodoFind={setTodoFind} />

      <TodoList>
        {searchesTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {completeTodo(todo.text)}}
            onDelete={() => {deleteTodo(todo.text)}}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
 }


export default App;
