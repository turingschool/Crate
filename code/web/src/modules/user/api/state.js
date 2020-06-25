// App Imports
import { isEmpty } from '../../../setup/helpers'
<<<<<<< HEAD
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'
=======
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT, ASSIGN_STYLE } from './actions'
>>>>>>> aaced8e... Display survey component with initial styling

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
<<<<<<< HEAD
  details: null
=======
  details: null,
  isSurveyCompleted: false
>>>>>>> aaced8e... Display survey component with initial styling
}

// State
export default (state = userInitialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
=======
    case ASSIGN_STYLE:
    return {
      ...state,
      error: null,
      isLoading: action.isLoading,
      answers
    }
>>>>>>> aaced8e... Display survey component with initial styling
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }

    default:
      return state
  }
}