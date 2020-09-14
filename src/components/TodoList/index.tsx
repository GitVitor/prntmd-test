import React, { useEffect } from 'react'
import 'react-toggle/style.css'
import Toggle from 'react-toggle'

import { Col } from 'styled-bootstrap-grid'
import * as s from './styles'
import InputText from '../InputText'
import { useDispatch, useSelector } from 'react-redux'
import { Todo } from '../../store/modules/todos/ActionTypes'
import { RootState } from '../../store/reducer'
import { fetchTodos } from '../../store/modules/todos/actions'

interface List {
  data: Array<Todo>
  onCompleted: () => void
  onChange: (e: React.ChangeEvent) => void
}

const List = ({ data, onChange, onCompleted }: List) => (
  <>
    {data.length === 0 ? (
      <s.EmptyList>Nenhum item na lista</s.EmptyList>
    ) : (
      data.map((todo, idx) => (
        <s.ListItem key={idx} onClick={onCompleted}>
          <Col>
            <InputText value={todo.name} onChange={onChange} />
          </Col>
          <s.ColCheckboxWrapper>
            <Toggle defaultChecked={todo.completed} />
          </s.ColCheckboxWrapper>
        </s.ListItem>
      ))
    )}
  </>
)

export default function TodoList() {
  const dispatch = useDispatch()
  const todoListState = useSelector((state: RootState) => state.todos)

  useEffect(() => {
    !todoListState.isFetching &&
      !todoListState.error &&
      !todoListState.data.length &&
      dispatch(fetchTodos())
  })

  const addNewTodo = () => {}

  const onChange = () => {}

  const testClick = () => {
    console.log('click')
  }

  return (
    <div className="TodoList">
      <s.Container>
        <s.ListRowWrapper>
          <List
            data={todoListState.data}
            onCompleted={testClick}
            onChange={onChange}
          />
        </s.ListRowWrapper>
        <s.AddNewWrapper>
          <s.AddNewButton onClick={addNewTodo}>+</s.AddNewButton>
        </s.AddNewWrapper>
      </s.Container>
    </div>
  )
}
