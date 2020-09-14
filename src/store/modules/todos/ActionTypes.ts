export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST'
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE'
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'

export interface Todo {
  id: number
  name: string
  completed?: boolean
}

export interface TodoError {
  message: string
}
