import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";


function TodoForm(){
    const{
        addTodo,
        setOpenModal,
    }= React.useContext(TodoContext)

    const [newTodoValue, setNewTodoSearch] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel= ()=>{
        setOpenModal(false)
    }

    const onChange = (event)=>{
        setNewTodoSearch(event.target.value)
    }
return(
    <form onSubmit={onSubmit}>
        <label> Escribe tu nuevo TODO </label>
        <textarea 
        placeholder="crear un TODO" 
        value={newTodoValue}
        onChange={onChange}
        />
        <div className="TodoForm-buttonContainer">
        <button 
            type="button"
            className="TodoForm-button
                TodoForm-button--cancel"
            onClick={onCancel}> 
            Cancelar
        </button>
        <button
        type="submit"
        className="TodoForm-button
            TodoForm-button--add">
            Añadir
        </button>
        </div>
    </form>
)
}

export {TodoForm}