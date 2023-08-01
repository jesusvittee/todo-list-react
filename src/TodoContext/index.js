import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({children}){

    const {
        item:todos, 
        saveItem:saveTodos,
         loading,
          error
        } = useLocalStorage('TODOS_V1', []);
    
    const [todoFind, setTodoFind] = React.
    useState('');

    const [openModal, setOpenModal ] = React.useState(false)

    const completedTodos = todos.filter(
        todo => todo.completed
        ).length;
    const totalTodos = todos.length;
    
    const searchesTodos = todos.filter((todo)=>{
      const todoText = todo.text.toLowerCase();
      const searchText = todoFind.toLowerCase()
      return todoText.includes(searchText)
    });
    
    const addTodo = (text)=>{
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed:false,
        })
        saveTodos(newTodos);
    }
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

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            todoFind,
            setTodoFind,
            searchesTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export{ TodoContext ,  TodoProvider}