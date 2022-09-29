import React from 'react'
import Filter from './footer/Filter'
import AddTodo from './addTodo/AddTodo'
import VisibleTodoList from './todoList/VisibleTodoList'
import EditTodo from "./editTodo/EditTodo";
import './App.css';

const App = () => (
  <div>
    <AddTodo />
    <EditTodo />
    <Filter />
    <VisibleTodoList />
  </div>
)

export default App
