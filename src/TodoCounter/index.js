import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos} = React.useContext(TodoContext)

  const cheers = 'Felicidades completaste los TODO Exelente!!!';
  const ranking = `Has completado ${completedTodos} de ${totalTodos} TODOs`;
  const dataTodo = () => {
  if(completedTodos === 0 && totalTodos === 0){
    return(cheers)
  } if (completedTodos > 0 || totalTodos > 0){
    return(ranking)
  }
  }
  return (
    <h1 className="TodoCounter">
      {dataTodo()}
      {/* Has completado <span>{completed}</span> de <span>{total}</span> TODOs {cheers} */}
    </h1>
  );
}

export { TodoCounter };
