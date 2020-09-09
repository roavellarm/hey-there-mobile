import React from 'react'
import styled from 'styled-components/native'

const StyledContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #241b28;
  padding: 6px;
  align-items: center;
`
interface Props {
  children: React.ReactNode
}
const Container: React.FC<Props> = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
