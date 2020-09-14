import React from 'react'
import * as s from './styles'

interface InputTextProps {
  value: string
  onChange: (e: React.ChangeEvent<any>) => void
  onBlur: () => void
  placeholder?: string
}

export default function InputText({
  value,
  onChange,
  onBlur,
  placeholder,
}: InputTextProps) {
  return (
    <s.Input
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  )
}
