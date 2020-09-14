import React, { useEffect, useState } from 'react'
import 'react-toggle/style.css'
import Toggle from 'react-toggle'

import { Col } from 'styled-bootstrap-grid'
import * as s from './styles'
import InputText from '../InputText'
import { useDispatch, useSelector } from 'react-redux'
import { Todo } from '../../store/modules/todos/ActionTypes'
import { RootState } from '../../store/reducer'
import {
  addTodo,
  fetchTodos,
  updateTodo,
} from '../../store/modules/todos/actions'

interface List {
  data: Array<Todo>
  onChange: (todo: Todo) => void
}

const List = ({ data, onChange }: List) => {
  const [internalData, setInternalData] = useState(data)

  useEffect(() => {
    setInternalData(data)
  }, [data])

  const onChangeInternalData = (
    id: number,
    name: string,
    completed: boolean = false
  ) => {
    setInternalData(
      internalData.map((item) => {
        return item.id === id ? { ...item, name, completed } : item
      })
    )
  }

  if (internalData.length === 0) {
    return <s.EmptyList>Nenhum item na lista</s.EmptyList>
  }

  return (
    <>
      {internalData.map((todo) => (
        <s.ListItem key={todo.id}>
          <Col>
            <InputText
              value={todo.name}
              onChange={(e: any) =>
                onChangeInternalData(
                  todo.id,
                  e.currentTarget.value,
                  todo.completed
                )
              }
              onBlur={() => {
                onChange(todo)
              }}
              placeholder={'Insira uma atividade'}
            />
          </Col>
          <s.ColCheckboxWrapper>
            <Toggle
              defaultChecked={todo.completed}
              onChange={() => {
                onChangeInternalData(todo.id, todo.name, !todo.completed)
                onChange({ ...todo, completed: !todo.completed })
              }}
            />
          </s.ColCheckboxWrapper>
        </s.ListItem>
      ))}
    </>
  )
}

export default function TodoList() {
  const dispatch = useDispatch()
  const todoListState = useSelector((state: RootState) => state.todos)

  useEffect(() => {
    !todoListState.isFetching &&
      !todoListState.error &&
      !todoListState.data.length &&
      dispatch(fetchTodos())
  })

  const addNewTodo = () => {
    dispatch(addTodo())
  }

  const onChange = (todo: Todo) => {
    dispatch(updateTodo(todo))
  }

  return (
    <div className="TodoList">
      <s.Container>
        {todoListState.isFetching && 'carregando...'}

        {!todoListState.isFetching && !todoListState.error && (
          <>
            <s.ListRowWrapper>
              <List data={todoListState.data} onChange={onChange} />
            </s.ListRowWrapper>
            <s.AddNewWrapper>
              <s.AddNewButton onClick={addNewTodo}>+</s.AddNewButton>
            </s.AddNewWrapper>
          </>
        )}

        {
          !todoListState.isFetching && todoListState.error && 'Erro ao carregar a API'
        }
      </s.Container>
    </div>
  )
}
