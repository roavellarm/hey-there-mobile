import React, { useState, useEffect, memo, ReactNode } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { transparentize } from 'polished'
import io from 'socket.io-client'
import * as C from '../components'

const MessagesContainer = styled.View`
  background-color: ${transparentize(0.8, '#fff')};
  flex: 1;
  width: 100%;
`

memo(MessagesContainer)

const Message = memo(({ children, ...rest }: { children: ReactNode }) => {
  return <C.Text {...rest}>{children}</C.Text>
})

const ChatRoom: React.FC = () => {
  // Colocar chat message em cammel case!!!!!!!!!!!!!
  const SOCKET_MESSAGE = 'chatMessage'
  const [chatMessage, setChatMessage] = useState<string>('')
  const [chatMessages, setChatMessages] = useState<string[]>([''])

  // const socket = io('http://192.168.1.12:3002')
  const socket = io('http://192.168.0.15:3002')

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
    <C.Container>
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
    </C.Container>
  )
}

export default memo(ChatRoom)
