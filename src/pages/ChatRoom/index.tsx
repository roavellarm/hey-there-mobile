import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { TextInput } from 'react-native-gesture-handler'
import Container from '../../components/Container'
import Text from '../../components/Text'
import MessagesContainer from './styles'

const ChatRoom: React.FC = () => {
  const [chatMessage, setChatMessage] = useState<string>('')
  const [chatMessages, setChatMessages] = useState<string[]>(['OIOIOIO'])

  const socket = io('http://192.168.1.12:3002')

  function submitChatMessage() {
    socket.emit('chat message', chatMessage)
    setChatMessage('')
  }

  useEffect(() => {
    socket.on('chat message', (msg: string) =>
      setChatMessages([...chatMessages, msg])
    )
  }, [chatMessages, setChatMessage])

  return (
    <Container>
      <MessagesContainer>
        {chatMessages.map((msg, index) => {
          // eslint-disable-next-line react/no-array-index-key
          return <Text key={index}>{msg}</Text>
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
        onChangeText={(teste: string) => {
          setChatMessage(teste)
        }}
      />
    </Container>
  )
}

export default ChatRoom
