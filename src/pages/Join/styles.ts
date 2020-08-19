import { transparentize } from 'polished'
import styled from 'styled-components/native'

export const Box = styled.View`
  background-color: ${transparentize(0.9, 'white')};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  padding: 0px 16px 16px;
`

export const Title = styled.Text`
  font-family: 'Lato_300Light';
  line-height: 100px;
  letter-spacing: 0.4px;
  font-size: 32px;
  color: #fff;
`

export const Label = styled.Text`
  font-family: 'Lato_700Bold';
  font-size: 18px;
  padding-left: 5px;
  width: 100%;
  letter-spacing: 0.4px;
  color: #fff;
`

export const Input = styled.TextInput`
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
