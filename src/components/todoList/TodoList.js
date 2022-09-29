import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo/Todo'
import './TodoList.css';


const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <div className={'wrapper'}>
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={() => toggleTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      )}
    </ul>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dateOfCreation: PropTypes.object.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    datesFromText: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
