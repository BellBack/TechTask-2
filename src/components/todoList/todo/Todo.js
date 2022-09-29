import React from 'react'
import PropTypes from 'prop-types'
import { setTodoPasser } from "../../../actions";
import { connect } from "react-redux";
import './Todo.css';

const Todo = ({setPassedTodo, toggleTodo, deleteTodo, todo}) => (
  <li style={{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}>
    <div>
      {todo.name}
    </div>
    <div>
      {todo.category}
    </div>
    <div>
      {todo.dateOfCreation.toLocaleDateString()}
    </div>
    <div>
      {todo.text}
    </div>
    <div>
      {todo.datesFromText.join(', ')}
    </div>
    <button onClick={setPassedTodo}>
      edit
    </button>
    <button onClick={toggleTodo}>
      toggle
    </button>
    <button onClick={deleteTodo}>
      delete
    </button>
  </li>
)

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  todo: ownProps.todo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setPassedTodo: () => dispatch(setTodoPasser(ownProps.todo)),
  toggleTodo: ownProps.toggleTodo,
  deleteTodo: ownProps.deleteTodo
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)
