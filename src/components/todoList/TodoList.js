import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo/Todo'
import './TodoList.css';
import {setAnnouncerEvent} from "../../actions";


const TodoList = ({todos, toggleTodo, deleteTodo, dispatch}) => {

  return (
      (todos.length)?
          <ul>
            <Todo header={true}/>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleTodo={() => {
                      toggleTodo(todo.id)
                      dispatch(setAnnouncerEvent("Todo's completed property switched successfully!", false))
                    }}
                    deleteTodo={() => {
                      deleteTodo(todo.id)
                      dispatch(setAnnouncerEvent("Todo deleted successfully!", false))
                    }}
                />
            )}
          </ul> :
          <p>This list is empty!</p>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dateOfCreation: PropTypes.object.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    datesFromText: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired),
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func
}

export default TodoList
