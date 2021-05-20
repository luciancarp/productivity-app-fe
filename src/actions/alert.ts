import { v4 as uuid } from 'uuid'
import {
  ADD_ALERT,
  REMOVE_ALERT,
  AlertVariants,
  AlertActionTypes,
} from './types'

export function addAlert(
  variant: AlertVariants,
  message: string
): AlertActionTypes {
  return {
    type: ADD_ALERT,
    payload: {
      id: uuid(),
      variant,
      message,
    },
  }
}

export function removeAlert(id: string): AlertActionTypes {
  return {
    type: REMOVE_ALERT,
    payload: id,
  }
}
