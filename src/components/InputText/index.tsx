import React from 'react'
import * as s from './styles'

export default function InputText({
  value,
  onChange,
  onBlur,
}: {
  value: string
  onChange: (e: React.ChangeEvent<any>) => void
  onBlur: () => void
}) {
  return (
    <s.Input type="text" value={value} onChange={onChange} onBlur={onBlur} />
  )
}
