import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Burbuja } from './Burbuja.js';
import {TodoHeader} from './TodoHeader';


const defaultTodos = [
  { text: 'Cortar una cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: true },
  { text: 'Aprender ingles', completed: false },
];

function App() {
  return (
    <>
    <TodoHeader>
    <Burbuja/>
      <TodoCounter completed={16} total={25} />
    </TodoHeader>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}


export default App;
