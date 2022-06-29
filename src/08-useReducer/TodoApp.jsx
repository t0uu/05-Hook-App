import { useTodos } from "../hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"



export const TodoApp = () => {

    const {handleNewTodo,  pendingTodosCount, handleDeleteTodo,handleToggleTodo,todos,todosCount }=  useTodos()
  
  return (
    <>
    <h1>TodoApp: {todosCount},<small>pendientes:{ pendingTodosCount}</small></h1>
    <hr/>
    <div className="row">
        <div className="col-7">
            {/* Todo List */}
            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
            {/* Fin Todo List */}
        </div>
        <div>
            <h4>Agregar TODO</h4>
            <hr/>
            {/* TodoAdd  onNewTodo*/}
          <TodoAdd onNewTodo={handleNewTodo}/>
            {/* Fin TodoAdd */}
        </div>
    </div>

    </>
  )
}
