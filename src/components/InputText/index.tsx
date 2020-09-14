import React from 'react'
import * as s from './styles'

export default function InputText({
  value,
  onChange,
}: {
  value: string
  onChange: (e: React.ChangeEvent) => void
}) {
  return <s.Input type="text" value={value} onChange={onChange} />
}
