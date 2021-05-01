export const PROJECTS_SUCCESS = 'PROJECTS_SUCCESS'
export const PROJECTS_LOADING = 'PROJECTS_LOADING'
export const PROJECTS_FAIL = 'PROJECTS_FAIL'

export type ProjectsActionTypes =
  | { type: 'PROJECTS_SUCCESS'; payload: ProjectsType }
  | { type: 'PROJECTS_LOADING' }
  | { type: 'PROJECTS_FAIL' }

export type ProjectType = {
  title: string
  date: Date
}

export type ProjectsType = ProjectType[]
