import styled from 'styled-components/native'
import { transparentize } from 'polished'

const MessagesContainer = styled.View`
  background-color: ${transparentize(0.8, '#fff')};
  flex: 1;
  width: 100%;
`

export default MessagesContainer
