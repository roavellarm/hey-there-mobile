import React from 'react'
import styled from 'styled-components/native'

export const StyledLabel = styled.Text`
  font-family: 'Lato_700Bold';
  font-size: 18px;
  padding-left: 5px;
  width: 100%;
  height: 25px;
  letter-spacing: 0.4px;
  color: #fff;
`

export const StyledInput = styled.TextInput`
  background-color: #fff;
  width: 100%;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 8px;
  color: #50565e;
  font-family: 'Lato_400Regular';
  font-size: 16px;
  letter-spacing: 0.4px;
`
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
