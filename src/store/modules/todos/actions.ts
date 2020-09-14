import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, Todo } from './ActionTypes'
import todoService from '../../../service/todo'

// export const addTodo = (name: string) => ({
//   type: ADD_TODO,
//   payload: {
//     id: 1,
//     name,
//   },
// })

// export const toggleTodo = (id: number) => ({
//   type: TOGGLE_TODO,
//   payload: {
//     id,
//   },
// })

// export const deleteTodo = (id: number) => ({
//   type: DELETE_TODO,
//   payload: {
//     id,
//   },
// })

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
    const response = await todoService.getTodos()
    dispatch(fetchTodosSuccess(response))
  }
}
