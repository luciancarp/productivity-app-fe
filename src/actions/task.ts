import { Dispatch } from 'redux'
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
  TaskType,
  TasksType,
  AlertActionTypes,
  AlertVariants,
} from './types'
import axios from 'axios'
import { addAlert } from './alert'

export const getTasks =
  (projectId: string) => async (dispatch: Dispatch<TaskActionTypes>) => {
    try {
      dispatch({
        type: GET_TASKS_LOADING,
      })

      const res = await axios.get(`/api/task/project/${projectId}`)

      const tasks: TasksType = res.data.map((task: any) => ({
        id: task._id,
        title: task.title,
        project: task.project._id,
        time: task.time,
        done: task.done,
        date: new Date(task.date),
      }))

      dispatch({
        type: GET_TASKS_SUCCESS,
        payload: tasks,
      })
    } catch (e) {
      dispatch({
        type: GET_TASKS_FAIL,
      })
    }
  }

export const createTask =
  (newTaskData: { title: string; project: string; time: string }) =>
  async (dispatch: Dispatch<TaskActionTypes> & Dispatch<AlertActionTypes>) => {
    try {
      dispatch({
        type: CREATE_TASK_LOADING,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const body = JSON.stringify({
        ...newTaskData,
      })

      let res = await axios.post('/api/task/', body, config)

      const newTask: TaskType = {
        id: res.data._id,
        title: res.data.title,
        project: res.data.project._id,
        time: res.data.time,
        done: res.data.done,
        date: new Date(res.data.date),
      }

      dispatch({
        type: CREATE_TASK_SUCCESS,
        payload: newTask,
      })
    } catch (error) {
      const errors = error.response.data.errors

      if (errors) {
        errors.forEach((error: any) => {
          dispatch(addAlert(AlertVariants.error, error.msg))
        })
      }

      dispatch({
        type: CREATE_TASK_FAIL,
      })
    }
  }

export const deleteTask =
  (id: string) => async (dispatch: Dispatch<TaskActionTypes>) => {
    try {
      dispatch({
        type: DELETE_TASK_LOADING,
      })

      const res = await axios.delete(`/api/task/${id}`)

      const task: TaskType = {
        id: res.data._id,
        title: res.data.title,
        project: res.data.project._id,
        time: res.data.time,
        done: res.data.done,
        date: new Date(res.data.date),
      }

      dispatch({
        type: DELETE_TASK_SUCCESS,
        payload: task.id,
      })
    } catch (e) {
      dispatch({
        type: DELETE_TASK_FAIL,
      })
    }
  }
