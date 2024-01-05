import PropTypes from 'prop-types';

export default function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
            </label>
            {/* eslint-disable-next-line no-unused-vars */}
            <button onClick={e => deleteTodo(id)} className="btn btn-danger"> Delete </button>
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