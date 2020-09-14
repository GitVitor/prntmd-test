export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'

export interface Todo {
  id: number
  name: string
  completed?: boolean
}

export interface TodoError {
  message: string
}
