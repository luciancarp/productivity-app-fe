import { combineReducers } from 'redux'
import projectReducer from './project'
import taskReducer from './task'
import userReducer from './user'
import alertReducer from './alert'

const rootReducer = combineReducers({
  task: taskReducer,
  project: projectReducer,
  user: userReducer,
  alert: alertReducer,
})

export default rootReducer
