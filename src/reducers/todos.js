const todos = (state = [], action) => {
  switch (action.type) {
    case 'INIT_TODOS':
      return [
        ...state,
        ...action.todos
      ]
    case 'ADD_TODO':
      return [
        ...state,
        {
          ...action.todo
        }
      ]
    case 'EDIT_TODO':
      return state.map(todo =>
          (todo.id === action.todo.id)
              ? action.todo
              : todo
      )
    case 'TOGGLE_TODO':
      return state.map(todo =>
          (todo.id === action.id)
              ? {...todo, completed: !todo.completed}
              : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todos
