import React, { useState, useEffect, memo, ReactNode } from 'react'
import io from 'socket.io-client'
import { TextInput } from 'react-native-gesture-handler'
import Container from '../../components/Container'
import Text from '../../components/Text'
import MessagesContainer from './styles'

const Message = memo(({ children, ...rest }: { children: ReactNode }) => {
  return <Text {...rest}>{children}</Text>
})

const ChatRoom: React.FC = () => {
  // Colocar chat message em cammel case!!!!!!!!!!!!!
  const SOCKET_MESSAGE = 'chatMessage'
  const [chatMessage, setChatMessage] = useState<string>('')
  const [chatMessages, setChatMessages] = useState<string[]>([''])

  const socket = io('http://192.168.1.12:3002')

  function submitChatMessage() {
    socket.emit(SOCKET_MESSAGE, chatMessage)
    setChatMessage('')
  }

  useEffect(() => {
    socket.on(SOCKET_MESSAGE, (msg: string) =>
      setChatMessages(previousMessagesState => [...previousMessagesState, msg])
    )
    return () => {
      socket.off(SOCKET_MESSAGE)
    }
  }, [])

  return (
    <Container>
      <MessagesContainer>
        {chatMessages.map((msg, index) => {
          // eslint-disable-next-line react/no-array-index-key
          return <Message key={index}>{msg}</Message>
        })}
      </MessagesContainer>

      <TextInput
        style={{
          height: 40,
          borderWidth: 2,
          backgroundColor: '#fff',
          width: '100%',
        }}
        autoCorrect={false}
        value={chatMessage}
        onSubmitEditing={() => submitChatMessage()}
        onChangeText={(e: string) => setChatMessage(e)}
      />
    </Container>
  )
}

export default memo(ChatRoom)
