import React, { ReactNode } from 'react'
import styled from 'styled-components/native'
import { transparentize } from 'polished'

export const StyledFormContainer = styled.View`
  background-color: ${transparentize(0.9, 'white')};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  padding: 0px 16px 16px;
`

interface Props {
  children: ReactNode
}

const FormContainer: React.FC<Props> = ({ children }: Props) => {
  return <StyledFormContainer>{children}</StyledFormContainer>
}

export default FormContainer
