import React from 'react'
import { StyledLabel, StyledInput } from './styles'

interface Props {
  label: string
  value: string
  onChange(text: string): void
  isPassword?: boolean
}

const Input: React.FC<Props> = (props: Props) => {
  const { label, value, onChange, isPassword = false } = props

  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        value={value}
        onChangeText={onChange}
        placeholder={label}
        secureTextEntry={isPassword}
        placeholderTextColor="silver"
      />
    </>
  )
}

export default Input
