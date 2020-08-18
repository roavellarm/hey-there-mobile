import React from 'react'
import Card, { CardInfo } from '../../components/Card'
import chatList from '../../mocks/chatList'
import Container from './styles'

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
