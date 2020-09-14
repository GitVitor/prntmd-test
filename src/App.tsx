import React from 'react'
import TodoList from './components/TodoList'

import { BaseCSS } from 'styled-bootstrap-grid'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Header from './components/Header'

export default function App() {
  return (
    <div>
      <BaseCSS />
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <TodoList />
        </>
      </ThemeProvider>
    </div>
  )
}
