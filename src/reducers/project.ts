import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_LOADING,
  GET_PROJECTS_FAIL,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_LOADING,
  CREATE_PROJECT_FAIL,
  SELECT_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_LOADING,
  GET_PROJECT_FAIL,
  ProjectActionTypes,
  ProjectsType,
  ProjectType,
} from '../actions/types'

type InitialStateType = {
  loading: boolean
  projects: ProjectsType
  selectedProject?: string
  project?: ProjectType
}

const initialState: InitialStateType = {
  loading: false,
  projects: [],
  project: undefined,
  selectedProject: undefined,
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
    case CREATE_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
      }
    case CREATE_PROJECT_LOADING:
      return {
        ...state,
        loading: true,
      }
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: [...state.projects, action.payload],
      }
    case SELECT_PROJECT:
      return {
        ...state,
        selectedProject: action.payload,
      }
    case GET_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
        project: undefined,
      }
    case GET_PROJECT_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        project: action.payload,
      }
    default:
      return state
  }
}

export default projectReducer
