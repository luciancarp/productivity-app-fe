import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_LOADING,
  GET_PROJECTS_FAIL,
  ProjectActionTypes,
  ProjectsType,
} from '../actions/types'

type InitialStateType = {
  loading: boolean
  projects?: ProjectsType
}

const initialState: InitialStateType = {
  loading: false,
  projects: [],
}

const projectReducer = (
  state: InitialStateType = initialState,
  action: ProjectActionTypes
): InitialStateType => {
  switch (action.type) {
    case GET_PROJECTS_FAIL:
      return {
        ...state,
        loading: false,
      }
    case GET_PROJECTS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
      }
    default:
      return state
  }
}

export default projectReducer
