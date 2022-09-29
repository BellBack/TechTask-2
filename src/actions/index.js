export const initTodos = todos => ({
  type: 'INIT_TODOS',
  todos
})

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

export const setFormVisible = todo => ({
  type: 'SET_FORM_VISIBLE',
  todo
})

export const setFormInvisible = () => ({
  type: 'SET_FORM_INVISIBLE'
})

export const setAnnouncerEvent = (text, isError) => ({
  type: 'SET_ANNOUNCER_EVENT',
  text,
  isError
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
