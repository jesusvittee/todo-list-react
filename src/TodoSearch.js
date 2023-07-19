import React from 'react'
import './TodoSearch.css';

function TodoSearch({todoFind, setTodoFind}) {



  return (
    <input
      placeholder="Buscar TODOs"
      className="TodoSearch"
      value={todoFind}    
      onChange={(event)=>{
        setTodoFind(event.target.value)
      }}
    />
  );
}

export { TodoSearch };