import React from 'react'
import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

const StyledButton = styled(RectButton)`
  background-color: #05a081;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  align-items: center;
  margin-top: 30px;
`

const Text = styled.Text`
  font-family: 'Lato_700Bold';
  letter-spacing: 0.4px;
  font-size: 18px;
  color: #fff;
`

interface Props {
  title: string
  onPress(): void
}

const Button = ({ title, onPress, ...rest }: Props) => {
  return (
    <StyledButton onPress={onPress} {...rest}>
      <Text>{title}</Text>
    </StyledButton>
  )
}

export default Button
