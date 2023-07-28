import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';
function TodoSearch() {
  const {
    todoFind,
    setTodoFind,
  } = React.useContext(TodoContext)


  return (
    <input
      placeholder="Buscar"
      className="TodoSearch"
      value={todoFind}
      onChange={(event) => {
        setTodoFind(event.target.value);
      }}
    />
  );
}

export { TodoSearch };