import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Burbuja } from '../Burbuja';
import {TodoHeader} from '../TodoHeader';
import {TodosLoading} from '../TodosLoading'
import {TodosCreate} from '../TodosCreate'
import {TodosError} from '../TodosError'
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm'
function AppUI() {

  const { 
    loading,
    error,
    searchesTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext)

  const { openModal , setOpenModal} = React.useContext(TodoContext)

    return (
    <>
    <TodoHeader>
    <Burbuja/>
    <TodoCounter/>
    </TodoHeader>
    <TodoSearch/>
    
      <TodoList>
        {loading &&
         <TodosLoading/>
         }
        {error && 
        <TodosError/>
        }
        {(!loading && searchesTodos.length 
          === 0) && <TodosCreate/>}

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
    <CreateTodoButton
     setOpenModal={setOpenModal}
     />

    { openModal && (
        <Modal>
          <TodoForm />
        </Modal>

    )}
    </>

      );
}

export {AppUI}