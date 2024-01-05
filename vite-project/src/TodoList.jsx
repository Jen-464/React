import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {

    return (
        <ul className="list">
            {/* short circuit with && - if true, run command after && */}
            {todos.length == 0 && "No Todos"}
            {todos.map(todoItem => {
                return (
                    // <TodoItem key={todoItem.id} id={todoItem.id} title={todoItem.title} completed={todoItem.completed} />
                    <TodoItem key={todoItem.id} {...todoItem} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                )
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}