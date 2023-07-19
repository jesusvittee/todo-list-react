import './TodoCounter.css';

function TodoCounter({completed, total }) {
  const cheers = 'Felicidades completaste los TODOs eres Exelente!!!';
  const ranking = `Has completado ${completed} de ${total} TODOs`;
  const dataTodo = () => {
  if(completed === 0 && total === 0){
    return(cheers)
  } if (completed > 0 || total > 0){
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
