import React from 'react'
import { connect } from 'react-redux'
import { editTodo } from '../../actions'
import {generateRandomID} from "../../helpers/generate.random.id";
import {getDatesFromText} from "../../helpers/get.dates.from.text";

const EditTodo = ({ todo, edit }) => {
  let emptyObj = {
    id: -1,
    name: '',
    category: 'Task',
    dateOfCreation: new Date(),
    text: '',
    datesFromText: [],
    completed: false
  }

  let [value, setValue] = React.useState(emptyObj);
  let [prevTodo, setPrevTodo] = React.useState({})

  if (!!todo && !!Object.keys(todo).length && JSON.stringify(prevTodo) !== JSON.stringify(todo)) {
    setPrevTodo({
      ...prevTodo,
      ...todo
    })
    setValue({
      ...value,
      ...todo
    })
  }

  function submitHandler(e){
    e.preventDefault()

    if (!value.name.trim() || !value.text.trim() || !todo || !Object.keys(todo).length)
      return

    edit({
      ...value,
      dateOfCreation: new Date(),
      datesFromText: getDatesFromText(value.text)
    });

    setValue({
      ...value,
      name: '',
      category: 'Task',
      text: ''
    })
  }

  function onChange(e){
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  return (
      <div className={'wrapper'}>
        <form onSubmit={submitHandler}>
          <input value={value.name} name={'name'} onChange={onChange} required/>
          <select value={value.category} name={'category'} onChange={onChange} required>
            <option value={'Task'}>Task</option>
            <option value={'Idea'}>Idea</option>
            <option value={'Quote'}>Quote</option>
            <option value={'Thought'}>Thought</option>
          </select>
          <input value={value.text} name={'text'} onChange={onChange} required/>
          <button type="submit">
            Edit Todo
          </button>
        </form>
      </div>
  )
}

function getTodoFromState(todo, passer){
  if (Object.keys(passer).length !== 0)
    return passer;
}

const mapStateToProps = state => ({
  todo: getTodoFromState(state.todo, state.todoPasser)
})

const mapDispatchToProps = dispatch => ({
  edit: todo => dispatch(editTodo(todo))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTodo)
