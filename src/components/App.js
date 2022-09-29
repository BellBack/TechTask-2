import React from 'react'
import Filter from './footer/Filter'
import VisibleTodoList from './todoList/VisibleTodoList'
import FormWrapper from "./formWrappper/FormWrapper"
import './App.css'
import {connect} from "react-redux";
import MiddleBlock from "./middleBlock/MiddleBlock";

const App = ({visibility}) => (
    <div>
      {(visibility) ? <FormWrapper/> : null}
      <Filter/>
      <VisibleTodoList/>
      <MiddleBlock/>
    </div>
)

const mapStateToProps = state => ({
  visibility: state.formDisplayer.visibility
})


export default connect(
    mapStateToProps,
    undefined
)(App)
