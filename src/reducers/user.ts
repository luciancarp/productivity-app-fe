import {
  GET_USER_SUCCESS,
  GET_USER_LOADING,
  GET_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_LOADING,
  LOGIN_USER_FAIL,
  CREATE_USER_SUCCESS,
  CREATE_USER_LOADING,
  CREATE_USER_FAIL,
  UserActionTypes,
  UserType,
} from '../actions/types'

type InitialStateType = {
  loading: boolean
  isAuthenticated: boolean
  user: UserType
}

const initialState: InitialStateType = {
  loading: false,
  isAuthenticated: false,
  user: {
    name: '',
    email: '',
    date: new Date(),
  },
}

const userReducer = (
  state: InitialStateType = initialState,
  action: UserActionTypes
): InitialStateType => {
  switch (action.type) {
    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
      }
    case GET_USER_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      }
    case LOGIN_USER_LOADING:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      }
    case CREATE_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      }
    case CREATE_USER_LOADING:
      return {
        ...state,
        loading: true,
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
