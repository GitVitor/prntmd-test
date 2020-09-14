import { Todo } from '../store/modules/todos/ActionTypes'

const URL = 'http://127.0.0.1:7000/api/todos'

const getTodos = async (): Promise<Todo[]> => {
  return fetch(URL, {
    method: 'get',
  }).then((response) => response.json())
}

export default {
  getTodos,
}
