import { Dispatch } from 'redux'
import {
  PROJECTS_SUCCESS,
  PROJECTS_LOADING,
  PROJECTS_FAIL,
  ProjectsActionTypes,
  ProjectsType,
} from './types'
import axios from 'axios'

export const getProjects = () => async (
  dispatch: Dispatch<ProjectsActionTypes>
) => {
  try {
    dispatch({
      type: PROJECTS_LOADING,
    })

    const res = await axios.get(``)

    const projects: ProjectsType = res.data.data.children.map(
      (project: any) => ({
        title: project.data.title,
        date: new Date(project.data.date),
      })
    )

    dispatch({
      type: PROJECTS_SUCCESS,
      payload: projects,
    })
  } catch (e) {
    dispatch({
      type: PROJECTS_FAIL,
    })
  }
}
