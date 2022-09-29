import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import todoPasser from "./todoPasser";

export default combineReducers({
  todos,
  visibilityFilter,
  todoPasser
})
