// User

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_LOADING = 'GET_USER_LOADING'
export const GET_USER_FAIL = 'GET_USER_FAIL'

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'

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

// Project

export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS'
export const GET_PROJECTS_LOADING = 'GET_PROJECTS_LOADING'
export const GET_PROJECTS_FAIL = 'GET_PROJECTS_FAIL'

export type ProjectType = {
  title: string
  date: Date
}

export type ProjectsType = ProjectType[]

export type ProjectActionTypes =
  | { type: 'GET_PROJECTS_SUCCESS'; payload: ProjectsType }
  | { type: 'GET_PROJECTS_LOADING' }
  | { type: 'GET_PROJECTS_FAIL' }
