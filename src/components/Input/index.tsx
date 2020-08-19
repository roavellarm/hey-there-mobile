import React from 'react'
import { Label, StyledInput } from './styles'

interface Props {
  key: string
  label: string
  value?: string
  onChange(text: string): void
}

const Input: React.FC<Props> = (props: Props) => {
  const { key, label, value, onChange } = props

  return (
    <>
      <Label>{label}</Label>
      <StyledInput
        key={key}
        value={value || ''}
        onChangeText={onChange}
        placeholder={label}
        secureTextEntry={key === 'password'}
        placeholderTextColor="silver"
      />
    </>
  )
}

export default Input
