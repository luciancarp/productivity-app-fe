import { Dispatch } from 'redux'
import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_LOADING,
  GET_PROJECTS_FAIL,
  ProjectActionTypes,
  ProjectsType,
  AlertActionTypes,
  AlertVariants,
  CREATE_PROJECT_LOADING,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,
  SELECT_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_LOADING,
  GET_PROJECT_FAIL,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_LOADING,
  DELETE_PROJECT_FAIL,
  ProjectType,
  TaskActionTypes,
  CLEAR_TASKS,
} from './types'
import axios from 'axios'
import { addAlert } from './alert'

export const getProjects =
  () => async (dispatch: Dispatch<ProjectActionTypes>) => {
    try {
      dispatch({
        type: GET_PROJECTS_LOADING,
      })

      const res = await axios.get('/api/project/user')

      const projects: ProjectsType = res.data.map((project: any) => ({
        id: project._id,
        title: project.title,
        date: new Date(project.date),
      }))

      dispatch({
        type: GET_PROJECTS_SUCCESS,
        payload: projects,
      })
    } catch (e) {
      dispatch({
        type: GET_PROJECTS_FAIL,
      })
    }
  }

export const createProject =
  (newProjectData: { title: string }) =>
  async (
    dispatch: Dispatch<ProjectActionTypes> & Dispatch<AlertActionTypes>
  ) => {
    try {
      dispatch({
        type: CREATE_PROJECT_LOADING,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const body = JSON.stringify({
        title: newProjectData.title,
      })

      let res = await axios.post('/api/project/', body, config)

      const newProject: ProjectType = {
        id: res.data._id,
        title: res.data.title,
        date: new Date(res.data.date),
      }

      dispatch({
        type: CREATE_PROJECT_SUCCESS,
        payload: newProject,
      })
    } catch (error) {
      const errors = error.response.data.errors

      if (errors) {
        errors.forEach((error: any) => {
          dispatch(addAlert(AlertVariants.error, error.msg))
        })
      }

      dispatch({
        type: CREATE_PROJECT_FAIL,
      })
    }
  }

export const getProject =
  (id: string) => async (dispatch: Dispatch<ProjectActionTypes>) => {
    try {
      dispatch({
        type: GET_PROJECT_LOADING,
      })

      const res = await axios.get(`/api/project/${id}`)

      const project: ProjectType = {
        id: res.data._id,
        title: res.data.title,
        date: new Date(res.data.date),
      }

      dispatch({
        type: GET_PROJECT_SUCCESS,
        payload: project,
      })
    } catch (e) {
      dispatch({
        type: GET_PROJECT_FAIL,
      })
    }
  }

export const deleteProject =
  (id: string) => async (dispatch: Dispatch<ProjectActionTypes>) => {
    try {
      dispatch({
        type: DELETE_PROJECT_LOADING,
      })

      const res = await axios.delete(`/api/project/${id}`)

      const project: ProjectType = {
        id: res.data._id,
        title: res.data.title,
        date: new Date(res.data.date),
      }

      dispatch({
        type: DELETE_PROJECT_SUCCESS,
        payload: project.id,
      })
    } catch (e) {
      dispatch({
        type: DELETE_PROJECT_FAIL,
      })
    }
  }

export const selectProject =
  (id: string) =>
  (dispatch: Dispatch<ProjectActionTypes> & Dispatch<TaskActionTypes>) => {
    dispatch({
      type: SELECT_PROJECT,
      payload: id,
    })
    dispatch({
      type: CLEAR_TASKS,
    })
  }
