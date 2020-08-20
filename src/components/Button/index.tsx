import React from 'react'
import { StyledButton, Text } from './styles'

interface Props {
  title: string
  onPress(): void
}

const Button: React.FC<Props> = ({ title, onPress, ...rest }: Props) => {
  return (
    <StyledButton onPress={onPress} {...rest}>
      <Text>{title}</Text>
    </StyledButton>
  )
}

export default Button
