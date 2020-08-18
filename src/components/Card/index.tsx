import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import styles from './styles'

export interface CardInfo {
  chatId: string
  name: string
  msgPreview: string
  avatar: ImageSourcePropType
  time: string
  newMessages: string
}

interface CardProps {
  cardInfo: CardInfo
}

const Card: React.FC<CardProps> = ({ cardInfo }: { cardInfo: CardInfo }) => {
  const { avatar, name, msgPreview, time, newMessages } = cardInfo

  return (
    <View style={styles.card}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.textsContainer}>
        <View style={styles.texts}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.textMsg}>{msgPreview}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text
            style={newMessages === '0' ? styles.timeText2 : styles.timeText}
          >
            {time}
          </Text>
          {newMessages !== '0' && (
            <View style={styles.newMsgsCircle}>
              <Text style={styles.newMsgs}>{newMessages}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default Card
