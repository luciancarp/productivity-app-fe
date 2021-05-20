import {
  ADD_ALERT,
  REMOVE_ALERT,
  AlertType,
  AlertActionTypes,
} from '../actions/types'

type InitialStateType = AlertType[]

const initialState: InitialStateType = []

const alertReducer = (
  state: InitialStateType = initialState,
  action: AlertActionTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_ALERT:
      return [...state, action.payload]
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload)

    default:
      return state
  }
}

export default alertReducer
