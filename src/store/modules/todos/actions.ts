import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  Todo,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
} from './ActionTypes'
import todoService from '../../../service/todo'

export const updateTodoRequest = () => ({
  type: UPDATE_TODO_REQUEST,
})

export const updateTodoSuccess = () => ({
  type: UPDATE_TODO_SUCCESS,
})

export const updateTodoFailure = (errorMessage: string) => ({
  type: UPDATE_TODO_FAILURE,
  error: errorMessage,
})

export const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
})

export const fetchTodosSuccess = (payload: Todo[]) => ({
  type: FETCH_TODOS_SUCCESS,
  payload,
})

export const fetchTodosFailure = (errorMessage: string) => ({
  type: FETCH_TODOS_FAILURE,
  errorMessage,
})

export const addTodoRequest = () => ({
  type: ADD_TODO_REQUEST,
})

export const addTodoSuccess = (payload: Todo) => ({
  type: ADD_TODO_SUCCESS,
  payload,
})

export const addTodoFailure = (errorMessage: string) => ({
  type: ADD_TODO_FAILURE,
  errorMessage,
})

export const fetchTodos = () => {
  return async (dispatch: any) => {
    dispatch(fetchTodosRequest())
    try {
      const response = await todoService.getTodos()
      dispatch(fetchTodosSuccess(response))
    } catch (error) {
      dispatch(fetchTodosFailure(error))
    }
  }
}

export const updateTodo = (todo: Todo) => {
  return async (dispatch: any) => {
    dispatch(updateTodoRequest())
    try {
      await todoService.updateTodo(todo)
      dispatch(updateTodoSuccess())
    } catch (error) {
      dispatch(updateTodoFailure(error))
    }
  }
}

export const addTodo = (name: string = '') => {
  return async (dispatch: any) => {
    dispatch(addTodoRequest())
    try {
      const response = await todoService.addTodo(name)
      dispatch(addTodoSuccess(response))
    } catch (error) {
      dispatch(addTodoFailure(error))
    }
  }
}
