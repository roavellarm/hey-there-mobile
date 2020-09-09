import React from 'react'
import styled from 'styled-components/native'
import Card, { CardInfo } from '../components/Card'
import chatList from '../mocks/chatList'

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #241b28;
  padding: 6px;
  align-items: center;
`

const ChatList: React.FC = () => {
  return (
    <Container>
      {chatList.map((info: CardInfo) => {
        return <Card key={info.chatId} cardInfo={info} />
      })}
    </Container>
  )
}

export default ChatList
