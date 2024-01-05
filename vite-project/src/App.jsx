import NewTodoForm from "./NewTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
import "./style.css"

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todoItem => {
        if (todoItem.id === id) {
          return { ...todoItem, completed }
        }
        return todoItem
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todoItem => todoItem.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header"> To Do List </h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}