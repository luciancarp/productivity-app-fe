import { combineReducers } from 'redux'
import projectReducer from './project'
import userReducer from './user'
import alertReducer from './alert'

const rootReducer = combineReducers({
  project: projectReducer,
  user: userReducer,
  alert: alertReducer,
})

export default rootReducer
