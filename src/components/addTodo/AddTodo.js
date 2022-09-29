import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import { generateRandomID } from "../../helpers/generate.random.id";
import { getDatesFromText } from "../../helpers/get.dates.from.text";

const AddTodo = ({ add }) => {
  let emptyObj = {
    id: -1,
    name: '',
    category: 'Task',
    dateOfCreation: new Date(),
    text: '',
    datesFromText: [],
    completed: false
  }

  let [value, setValue] = React.useState(emptyObj)

  function submitHandler(e){
    e.preventDefault()

    if (!value.name.trim() || !value.text.trim())
      return

    add({
      ...value,
      id: generateRandomID(10),
      dateOfCreation: new Date(),
      datesFromText: getDatesFromText(value.text)
    })

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
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  add: todo => dispatch(addTodo(todo))
})

export default connect(
    undefined,
    mapDispatchToProps
)(AddTodo)
