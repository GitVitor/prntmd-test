import {
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
      const response = await todoService.updateTodo(todo)
      dispatch(updateTodoSuccess())
      console.log(response)
    } catch (error) {
      dispatch(updateTodoFailure(error))
    }
  }
}
