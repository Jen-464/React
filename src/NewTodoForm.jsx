import { useState } from "react"
import PropTypes from 'prop-types';
import CircleCheck from "./CircleCheck";

export default function NewTodoForm({ onSubmit }) {
  // [current state , function that helps update state]
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(newItem)
    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="title">
        <h1>TODO</h1>
        <img className="modeSwitch" src="../assets/icon-sun.svg" alt="icon of a sun" />
      </div>
      <div className="form-row">
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" placeholder="Create a new todo..." />
        <CircleCheck />
        {/* <button className="btn"> Add </button> */}
      </div>
    </form>
  )
}

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};