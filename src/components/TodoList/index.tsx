import React from 'react'
import 'react-toggle/style.css'
import Toggle from 'react-toggle'

import { Col } from 'styled-bootstrap-grid'
import * as s from './styles'

interface Todo {
  name: string
  completed?: boolean
}

interface List {
  data: Array<Todo>
  onCompleted: () => void
}

const List = ({ data, onCompleted }: List) => (
  <>
    {data.length === 0 ? (
      <s.EmptyList>Nenhum item na lista</s.EmptyList>
    ) : (
      data.map((todo, idx) => (
        <s.ListItem key={idx} onClick={onCompleted}>
          <Col>{todo.name}</Col>
          <s.ColCheckboxWrapper>
            <Toggle defaultChecked={todo.completed} />
          </s.ColCheckboxWrapper>
        </s.ListItem>
      ))
    )}
  </>
)

export default function TodoList() {
  const todoListResponse: Array<Todo> = []

  const testClick = () => {
    console.log('click')
  }

  return (
    <div className="TodoList">
      <s.Container>
        <s.ListRowWrapper>
          <List data={todoListResponse} onCompleted={testClick} />
        </s.ListRowWrapper>
        <s.AddNewWrapper>
          <s.AddNewButton>+</s.AddNewButton>
        </s.AddNewWrapper>
      </s.Container>
    </div>
  )
}
