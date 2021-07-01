import {
  GET_TASKS_SUCCESS,
  GET_TASKS_LOADING,
  GET_TASKS_FAIL,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_LOADING,
  CREATE_TASK_FAIL,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_LOADING,
  DELETE_TASK_FAIL,
  TaskActionTypes,
  TasksType,
  CLEAR_TASKS,
  SELECT_CURRENT_TASK,
} from '../actions/types'

type InitialStateType = {
  loading: boolean
  tasks: TasksType
  currentTask: {
    id?: string
    title?: string
    projectId?: string
    time?: string
    playing?: boolean
  }
}

const initialState: InitialStateType = {
  loading: false,
  tasks: [],
  currentTask: {
    id: undefined,
    title: undefined,
    projectId: undefined,
    time: undefined,
    playing: undefined,
  },
}

const projectReducer = (
  state: InitialStateType = initialState,
  action: TaskActionTypes
): InitialStateType => {
  switch (action.type) {
    case GET_TASKS_FAIL:
      return {
        ...state,
        loading: false,
      }
    case GET_TASKS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      }
    case CREATE_TASK_FAIL:
      return {
        ...state,
        loading: false,
      }
    case CREATE_TASK_LOADING:
      return {
        ...state,
        loading: true,
      }
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload],
      }
    case DELETE_TASK_FAIL:
      return {
        ...state,
        loading: false,
      }
    case DELETE_TASK_LOADING:
      return {
        ...state,
        loading: true,
      }
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        currentTask:
          state.currentTask?.id === action.payload
            ? {
                id: undefined,
                title: undefined,
                projectId: undefined,
                time: undefined,
                playing: undefined,
              }
            : state.currentTask,
      }
    case CLEAR_TASKS:
      return {
        ...state,
        ...initialState,
      }
    case SELECT_CURRENT_TASK:
      return {
        ...state,
        currentTask: {
          ...state.tasks.find((task) => task.id === action.payload.id),
          projectId: action.payload.projectId,
          playing: true,
        },
      }
    default:
      return state
  }
}

export default projectReducer
