import {
  PROJECTS_SUCCESS,
  PROJECTS_LOADING,
  PROJECTS_FAIL,
  ProjectsActionTypes,
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

const projectsReducer = (
  state: InitialStateType = initialState,
  action: ProjectsActionTypes
): InitialStateType => {
  switch (action.type) {
    case PROJECTS_FAIL:
      return {
        ...state,
        loading: false,
      }
    case PROJECTS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
      }
    default:
      return state
  }
}

export default projectsReducer
