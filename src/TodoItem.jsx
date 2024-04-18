import PropTypes from 'prop-types';

export default function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
    const handleDeleteKeyDown = (event) => {
        if (event.key === 'Enter') {
          deleteTodo(id);
        }
      };

    return (
        <li>
            <label>
                {/* <img src="../assets/icon-check.svg" alt="Cross Icon" className="cross"></img> */}
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                <span id="todoItem">{title}</span>
            </label>
            {/* eslint-disable-next-line no-unused-vars */}
            <span onClick={e => deleteTodo(id)} onKeyDown={handleDeleteKeyDown} className="btn" tabIndex={0}> 
            <img src="../assets/icon-cross.svg" alt="Cross Icon" className="cross"></img>
            </span>
        </li>
    )
}

TodoItem.propTypes = {
    id: PropTypes.func.isRequired,
    title: PropTypes.func.isRequired,
    completed: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}