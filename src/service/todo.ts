import { Todo } from '../store/modules/todos/ActionTypes'

const URL = 'http://127.0.0.1:7000/api/todos'

const getTodos = (): Promise<Todo[]> => {
  return fetch(URL, {
    method: 'get',
  }).then((response) => response.json())
}

const updateTodo = (todo: Todo) => {
  return fetch(`${URL}/${todo.id}`, {
    method: 'put',
    headers: {
      'Content-type': 'application/json;',
    },
    body: JSON.stringify({
      name: todo.name,
      completed: todo.completed,
    }),
  })
}

const addTodo = (name: string): Promise<Todo> => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;',
    },
    body: JSON.stringify({
      name,
    }),
  }).then((response) => response.json())
}

export default {
  getTodos,
  updateTodo,
  addTodo,
}
