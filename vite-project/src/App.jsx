import { useState } from "react"
import "./style.css"

export default function App() {
  // [current state , function that helps update state]
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })

    setNewItem("")
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item"> New Item </label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn"> Add </button>
      </form>
      <h1 className="header"> To Do List </h1>
      <ul className="list">
        {/* short circuit with && - if true, run command after && */}
        {todos.length == 0 && "No Todos"}
        {todos.map(todoItem => {
          return (
            <li key={todoItem.id}>
              <label>
                <input type="checkbox" checked={todoItem.completed}
                  onChange={e => toggleTodo(todoItem.id, e.target.checked)} />
                {todoItem.title}
              </label>
              <button onClick={e => deleteTodo(todoItem.id)} className="btn btn-danger"> Delete </button>
            </li>
          )
        })}
      </ul>
    </>
  );
}