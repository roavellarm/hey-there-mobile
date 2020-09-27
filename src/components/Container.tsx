import React from 'react'
import styled from 'styled-components/native'

const StyledContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #241b28;
  padding: 6px;
  align-items: center;
  padding-top: 35px;
`
interface Props {
  children: React.ReactNode
}
const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
