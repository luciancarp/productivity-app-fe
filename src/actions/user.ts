import { Dispatch } from 'redux'
import axios from 'axios'

import {
  GET_USER_SUCCESS,
  GET_USER_LOADING,
  GET_USER_FAIL,
  UserActionTypes,
  UserType,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CREATE_USER_LOADING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  AlertActionTypes,
  AlertVariants,
} from './types'

import setAuthToken from '../utils/setAuthToken'

import { addAlert } from './alert'

export const getUser = () => async (dispatch: Dispatch<UserActionTypes>) => {
  try {
    dispatch({
      type: GET_USER_LOADING,
    })

    // if (localStorage.token) {
    //   setAuthToken(localStorage.token)
    // }

    const res = await axios.get('/api/user')

    const user: UserType = {
      name: res.data.name,
      email: res.data.email,
      date: new Date(res.data.date),
    }

    dispatch({
      type: GET_USER_SUCCESS,
      payload: user,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: GET_USER_FAIL,
    })
  }
}

export const loginUser =
  (loginData: { email: string; password: string }) =>
  async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      dispatch({
        type: LOGIN_USER_LOADING,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const body = JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      })

      let res = await axios.post('/api/user/login', body, config)

      if (res.data.token) {
        localStorage.setItem('token', res.data.token)
        setAuthToken(res.data.token)
      }

      res = await axios.get('/api/user')

      const user: UserType = {
        name: res.data.name,
        email: res.data.email,
        date: new Date(res.data.date),
      }

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user,
      })
    } catch (error) {
      // const errors = error.response.data.errors

      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, 'error')))
      // }

      dispatch({
        type: LOGIN_USER_FAIL,
      })
    }
  }

export const createUser =
  (signUpData: { name: string; email: string; password: string }) =>
  async (dispatch: Dispatch<UserActionTypes> & Dispatch<AlertActionTypes>) => {
    try {
      dispatch({
        type: CREATE_USER_LOADING,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const body = JSON.stringify({
        name: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
      })

      let res = await axios.post('/api/user/', body, config)

      if (res.data.token) {
        localStorage.setItem('token', res.data.token)
        setAuthToken(res.data.token)
      }

      res = await axios.get('/api/user')

      const user: UserType = {
        name: res.data.name,
        email: res.data.email,
        date: new Date(res.data.date),
      }

      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: user,
      })
    } catch (error) {
      const errors = error.response.data.errors

      if (errors) {
        errors.forEach((error: any) => {
          dispatch(addAlert(AlertVariants.error, error.msg))
        })
      }

      dispatch({
        type: CREATE_USER_FAIL,
      })
    }
  }
