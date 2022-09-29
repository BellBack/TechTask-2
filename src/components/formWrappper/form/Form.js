import React from 'react'
import {addTodo, editTodo, setAnnouncerEvent, setFormInvisible} from "../../../actions";
import {connect} from "react-redux";
import {getDatesFromText} from "../../../helpers/get.dates.from.text";
import {generateRandomID} from "../../../helpers/generate.random.id";
import './Form.css'

const Form = ({todo, onClick, cancel, dispatch}) => {
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

  function submitHandler(e) {
    e.preventDefault()

    if (!value.name.trim() ||
        !value.category.trim() ||
        !value.text.trim())
      return

    onClick({
      ...value,
      id: (!todo) ? generateRandomID(10) : value.id,
      dateOfCreation: (!todo) ? new Date() : value.dateOfCreation,
      datesFromText: getDatesFromText(value.text)
    }, !!todo);

    dispatch(setAnnouncerEvent('Todo ' + ((!todo)? 'created' : 'edited') + ' successfully!', false))

    setValue({
      ...value,
      id: -1,
      name: '',
      category: 'Task',
      text: ''
    })
  }

  function onChange(e) {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  return (
      <form onSubmit={submitHandler}>
        <input value={value.name} name={'name'} placeholder={'Name'} onChange={onChange} required/>
        <select value={value.category} name={'category'} onChange={onChange} required>
          <option value={'Task'}>Task</option>
          <option value={'Idea'}>Idea</option>
          <option value={'Quote'}>Quote</option>
          <option value={'Thought'}>Thought</option>
        </select>
        <textarea value={value.text} name={'text'} placeholder={"Text"} onChange={onChange} required/>
        <div className={'button-section'}>
          <button onClick={cancel}>Cancel</button>
          <button type="submit">
            {(!!todo) ? 'Edit todo' : 'Add todo'}
          </button>
        </div>
      </form>
  )
}

const mapStateToProps = state => ({
  todo: state.formDisplayer.todo
})

const mapDispatchToProps = dispatch => ({
  onClick: (todo, isDataPassed) => {
    if (isDataPassed)
      dispatch(editTodo(todo))
    else
      dispatch(addTodo(todo))
    dispatch(setFormInvisible())
  },
  cancel: () => dispatch(setFormInvisible()),
  dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)
