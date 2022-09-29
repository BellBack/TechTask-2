export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const editTodo = todo => ({
  type: 'EDIT_TODO',
  todo
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setTodoPasser = todo => ({
  type: 'SET_TODO_FOR_EDIT',
  todo
})


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
