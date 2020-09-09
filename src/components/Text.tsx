import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

const StyledText = styled.Text`
  font-family: 'Lato_400Regular';
  letter-spacing: 1px;
  line-height: 26px;
  font-size: 18px;
  color: #fff;
`
interface Props {
  children: ReactNode
}

const Text: React.FC<Props> = ({ children }: Props) => {
  return <StyledText>{children}</StyledText>
}

export default Text
