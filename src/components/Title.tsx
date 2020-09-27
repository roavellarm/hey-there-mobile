import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

const StyledTitle = styled.Text`
  font-family: 'Lato_300Light';
  line-height: 100px;
  letter-spacing: 0.4px;
  font-size: 32px;
  color: #fff;
`

interface Props {
  children: ReactNode
}

const Title = ({ children }: Props) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default Title
