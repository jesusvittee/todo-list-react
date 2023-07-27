import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className="CreateTodoButton"
    onClick={
      function(){
        console.log('Haz dado click')
    }}>+</button>
  );
}

export { CreateTodoButton };
