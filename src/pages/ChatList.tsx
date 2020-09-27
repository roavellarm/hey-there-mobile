import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import Card, { CardInfo } from '../components/Card'
import chatList from '../mocks/chatList'

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #241b28;
  padding: 6px;
  align-items: center;
`

const ChatList = () => {
  const { navigate } = useNavigation()

  const handleOnPress = (chatId: string) => {
    navigate({ name: 'Chat Room', params: { chatId } })
  }

  return (
    <Container>
      {chatList.map((info: CardInfo) => {
        return (
          <Card
            key={info.chatId}
            onPress={() => handleOnPress(info.chatId)}
            cardInfo={info}
          />
        )
      })}
    </Container>
  )
}

export default ChatList
