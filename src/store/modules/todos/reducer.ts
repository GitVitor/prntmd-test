import {
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  Todo,
  TodoError,
} from './ActionTypes'

interface TodoState {
  error?: TodoError
  isFetching: boolean
  data: Array<Todo>
}

const initialState: TodoState = {
  isFetching: false,
  error: undefined,
  data: [],
}

export default function todos(state = initialState, action: any): TodoState {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        error: undefined,
        isFetching: true,
      }
    case FETCH_TODOS_SUCCESS:
      return {
        isFetching: false,
        error: undefined,
        data: action.payload,
      }
    case FETCH_TODOS_FAILURE:
      return {
        isFetching: false,
        error: action.errorMessage,
        data: state.data,
      }

    default:
      return state
  }
}
