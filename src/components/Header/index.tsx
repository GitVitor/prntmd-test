import React from 'react'
import * as s from './styles'

interface DateWrapper {
  day: string
  month: string
  year: string
}

interface GetDateProps {
  month?: string
  year?: string
  day?: string
  weekday?: string
}

const getDateProps = (props: GetDateProps) =>
  new Date().toLocaleDateString('pt-br', props)

const DateWrapper = ({ day, month, year }: DateWrapper) => (
  <s.DateWrapper>
    <s.Day>{day}</s.Day>
    <s.MonthYear>
      {month}
      <br />
      {year}
    </s.MonthYear>
  </s.DateWrapper>
)

export default function Header() {
  const month = getDateProps({ month: 'short' })
  const day = getDateProps({ day: 'numeric' })
  const weekday = getDateProps({ weekday: 'long' })
  const year = getDateProps({ year: 'numeric' })
  return (
    <s.Container>
      <s.RowDate>
        <DateWrapper day={day} month={month} year={year} />
        <div>{weekday}</div>
      </s.RowDate>
    </s.Container>
  )
}
