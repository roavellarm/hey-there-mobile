import React from 'react'
import { View } from 'react-native'
import Card, { CardInfo } from '../../components/Card'
import chatList from '../../mocks/chatList'
import styles from './styles'

const ChatList: React.FC = () => {
  return (
    <View style={styles.container}>
      {chatList.map((info: CardInfo) => {
        return <Card key={info.chatId} cardInfo={info} />
      })}
    </View>
  )
}

export default ChatList
