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
function AppUI({
  loading,
  error,
    completedTodos,
    totalTodos,
    todoFind,
    setTodoFind,
    searchesTodos,
    completeTodo,
    deleteTodo
}){
    return (
        <>
        <TodoHeader>
        <Burbuja/>
          <TodoCounter completed={completedTodos} total={totalTodos} />
        </TodoHeader>
          <TodoSearch todoFind={todoFind} setTodoFind={setTodoFind} />
    
          <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchesTodos.length === 0) && <TodosCreate/>}

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

export {AppUI}