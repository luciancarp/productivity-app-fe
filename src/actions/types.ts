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

export type ProjectType = {
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
