const formDisplayer = (state = {visibility: false}, action) => {
  switch (action.type) {
    case 'SET_FORM_VISIBLE':
      return {
        ...state,
        visibility: true,
        todo: action.todo
      }
    case 'SET_FORM_INVISIBLE':
      return {
        visibility: false
      }
    default:
      return state
  }
}

export default formDisplayer
