import {generateRandomID} from "../helpers/generate.random.id";

const announcerSetter = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ANNOUNCER_EVENT':
      return {
        text: action.text,
        isError: action.isError,
        id: generateRandomID(3)
      }
    default:
      return state
  }
}

export default announcerSetter
