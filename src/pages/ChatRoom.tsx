import React, { useState, useEffect, memo, ReactNode, useContext } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { transparentize } from 'polished'
import io from 'socket.io-client'
import Text from '../components/Text'
import { getChatMessages } from '../mocks/ChatRoom'
import AuthContext from '../contexts/auth'

const Container = styled.View`
  background-color: #241b28;
  flex: 1;
  padding: 4px;
  width: 100%;
`

const MessagesContainer = styled.View`
  background-color: ${transparentize(0.8, '#fff')};
  flex: 1;
  width: 100%;
`

memo(MessagesContainer)

const Message = memo(({ children, ...rest }: { children: ReactNode }) => {
  return <Text {...rest}>{children}</Text>
})

interface ChatProps {
  author: string
  content: string
}

const ChatRoom = ({ route }) => {
  const { chatId } = route.params
  const { currentUser } = useContext(AuthContext)

  const SOCKET_MESSAGE = 'chatMessage'
  const [chatMessage, setChatMessage] = useState<string>('')
  const [chatMessages, setChatMessages] = useState<ChatProps[]>([])

  const socket = io('http://192.168.1.12:3002')
  // const socket = io('https://hey-there-socket-api.herokuapp.com:42450')

  function submitChatMessage() {
    socket.emit(SOCKET_MESSAGE, chatMessage)
    setChatMessage('')
  }

  useEffect(() => {
    setChatMessages(getChatMessages)
  }, [])

  // useEffect(() => {
  //   socket.on(SOCKET_MESSAGE, (msg: string) =>
  //     setChatMessages(previousMessagesState => [...previousMessagesState, msg])
  //   )
  //   return () => {
  //     socket.off(SOCKET_MESSAGE)
  //   }
  // }, [])

  return (
    <Container>
      <MessagesContainer>
        {chatMessages.map((msg, index) => {
          // eslint-disable-next-line react/no-array-index-key
          return (
            <>
              {msg.author === currentUser.email ? (
                <Message key={index}>{msg.content}</Message>
              ) : (
                <Message key={index}>{msg.content}</Message>
              )}
            </>
          )
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
