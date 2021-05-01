import { Dispatch } from 'redux'
import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_LOADING,
  GET_PROJECTS_FAIL,
  ProjectActionTypes,
  ProjectsType,
} from './types'
import axios from 'axios'

export const getProjects = () => async (
  dispatch: Dispatch<ProjectActionTypes>
) => {
  try {
    dispatch({
      type: GET_PROJECTS_LOADING,
    })

    const res = await axios.get(``)

    const projects: ProjectsType = res.data.data.children.map(
      (project: any) => ({
        title: project.data.title,
        date: new Date(project.data.date),
      })
    )

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
