import React from 'react'
import './App.css'
import {connect} from "react-redux"

import Filter from './filter/Filter'
import VisibleTodoList from './todoList/VisibleTodoList'
import MiddleBlock from "./middleBlock/MiddleBlock"
import Statistics from "./statictics/Statistics"
import FormWrapper from "./formWrappper/FormWrapper"
import {initTodos} from "../actions";

const App = ({formVisibility, dispatch, todos}) => {
  React.useEffect(() => {
    dispatch(initTodos((localStorage.getItem('todos'))
        ? JSON.parse(localStorage.getItem('todos')).map(todo => {
          return {
            ...todo,
            dateOfCreation: new Date(todo.dateOfCreation)
          }
        })
        : []
    ))
  }, [])

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
      <div className={'view'}>
        <section>
          <Filter/>
          <VisibleTodoList/>
          <MiddleBlock/>
        </section>
        <section>
          <Statistics/>
        </section>
        {(formVisibility) ? <FormWrapper className={'form-wrapper'}/> : null}
      </div>
  )
}

const mapStateToProps = state => ({
  formVisibility: state.formDisplayer.visibility,
  todos: state.todos
})


export default connect(
    mapStateToProps,
    undefined
)(App)
