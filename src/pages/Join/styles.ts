import styled from 'styled-components/native'
import { transparentize } from 'polished'

export const Box = styled.View`
  background-color: ${transparentize(0.9, 'white')};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  padding: 0px 16px 16px;
`

export const Text = styled.Text`
  font-family: 'Lato_300Light';
  line-height: 100px;
  letter-spacing: 0.4px;
  font-size: 32px;
  color: #fff;
`
