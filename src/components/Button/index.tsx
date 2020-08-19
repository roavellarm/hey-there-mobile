import React from 'react'
import { StyledButton, Text } from './styles'

interface Props {
  title: string
  onPress(): void
}

const Button: React.FC<Props> = ({ title, onPress }: Props) => {
  return (
    <StyledButton onPress={onPress}>
      <Text>{title}</Text>
    </StyledButton>
  )
}

export default Button
