// Alert
export const ADD_ALERT = 'ADD_ALERT'
export const REMOVE_ALERT = 'REMOVE_ALERT'

export enum AlertVariants {
  success = 'success',
  error = 'error',
}

export type AlertType = {
  id: string
  variant: AlertVariants
  message: string
}

export type AlertActionTypes =
  | { type: 'ADD_ALERT'; payload: AlertType }
  | { type: 'REMOVE_ALERT'; payload: string }

// User

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_LOADING = 'GET_USER_LOADING'
export const GET_USER_FAIL = 'GET_USER_FAIL'

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'

export const LOGOUT_USER = 'LOGOUT_USER'

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_LOADING = 'CREATE_USER_LOADING'
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL'

export type UserType = {
  id: string
  name: string
  email: string
  date: Date
}

export type UserActionTypes =
  | { type: 'GET_USER_SUCCESS'; payload: UserType }
  | { type: 'GET_USER_LOADING' }
  | { type: 'GET_USER_FAIL' }
  | { type: 'LOGIN_USER_SUCCESS'; payload: UserType }
  | { type: 'LOGIN_USER_LOADING' }
  | { type: 'LOGIN_USER_FAIL' }
  | { type: 'LOGOUT_USER' }
  | { type: 'CREATE_USER_SUCCESS'; payload: UserType }
  | { type: 'CREATE_USER_LOADING' }
  | { type: 'CREATE_USER_FAIL' }

// Project

export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS'
export const GET_PROJECTS_LOADING = 'GET_PROJECTS_LOADING'
export const GET_PROJECTS_FAIL = 'GET_PROJECTS_FAIL'

export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS'
export const CREATE_PROJECT_LOADING = 'CREATE_PROJECT_LOADING'
export const CREATE_PROJECT_FAIL = 'CREATE_PROJECT_FAIL'

export const SELECT_PROJECT = 'SELECT_PROJECT'

export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS'
export const GET_PROJECT_LOADING = 'GET_PROJECT_LOADING'
export const GET_PROJECT_FAIL = 'GET_PROJECT_FAIL'

export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS'
export const DELETE_PROJECT_LOADING = 'DELETE_PROJECT_LOADING'
export const DELETE_PROJECT_FAIL = 'DELETE_PROJECT_FAIL'

export type ProjectType = {
  id: string
  title: string
  date: Date
}

export type ProjectsType = ProjectType[]

export type ProjectActionTypes =
  | { type: 'GET_PROJECTS_SUCCESS'; payload: ProjectsType }
  | { type: 'GET_PROJECTS_LOADING' }
  | { type: 'GET_PROJECTS_FAIL' }
  | { type: 'CREATE_PROJECT_SUCCESS'; payload: ProjectType }
  | { type: 'CREATE_PROJECT_LOADING' }
  | { type: 'CREATE_PROJECT_FAIL' }
  | { type: 'SELECT_PROJECT'; payload: string }
  | { type: 'GET_PROJECT_SUCCESS'; payload: ProjectType }
  | { type: 'GET_PROJECT_LOADING' }
  | { type: 'GET_PROJECT_FAIL' }
  | { type: 'DELETE_PROJECT_SUCCESS'; payload: string }
  | { type: 'DELETE_PROJECT_LOADING' }
  | { type: 'DELETE_PROJECT_FAIL' }

// Task

export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS'
export const GET_TASKS_LOADING = 'GET_TASKS_LOADING'
export const GET_TASKS_FAIL = 'GET_TASKS_FAIL'

export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS'
export const CREATE_TASK_LOADING = 'CREATE_TASK_LOADING'
export const CREATE_TASK_FAIL = 'CREATE_TASK_FAIL'

export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS'
export const DELETE_TASK_LOADING = 'DELETE_TASK_LOADING'
export const DELETE_TASK_FAIL = 'DELETE_TASK_FAIL'

export const CLEAR_TASKS = 'CLEAR_TASKS'

export type TaskType = {
  id: string
  title: string
  project: string
  time: string
  done: boolean
  date: Date
}

export type TasksType = TaskType[]

export type TaskActionTypes =
  | { type: 'GET_TASKS_SUCCESS'; payload: TasksType }
  | { type: 'GET_TASKS_LOADING' }
  | { type: 'GET_TASKS_FAIL' }
  | { type: 'CREATE_TASK_SUCCESS'; payload: TaskType }
  | { type: 'CREATE_TASK_LOADING' }
  | { type: 'CREATE_TASK_FAIL' }
  | { type: 'DELETE_TASK_SUCCESS'; payload: string }
  | { type: 'DELETE_TASK_LOADING' }
  | { type: 'DELETE_TASK_FAIL' }
  | { type: 'CLEAR_TASKS' }
