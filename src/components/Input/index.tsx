import React from 'react'
import { Label, StyledInput } from './styles'

interface Props {
  name: string
  label: string
  value: string
  onChangeText(): void
}

const Input: React.FC<Props> = ({
  name,
  label,
  value,
  onChangeText,
}: Props) => {
  return (
    <>
      <Label>{label}</Label>
      <StyledInput
        value={value}
        onChangeText={onChangeText}
        placeholder={label}
        secureTextEntry={name === 'Password'}
        placeholderTextColor="silver"
      />
    </>
  )
}

export default Input
