import { combineReducers } from 'redux'
import projectReducer from './project'
import userReducer from './user'

const rootReducer = combineReducers({
  project: projectReducer,
  user: userReducer,
})

export default rootReducer
