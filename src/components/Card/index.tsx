import React from 'react'
import { ImageSourcePropType } from 'react-native'
import {
  Container,
  Avatar,
  TextsContainer,
  Texts,
  Name,
  TextMsg,
  TimeContainer,
  TimeText,
  NewMsgsCircle,
  NewMsgs,
} from './styles'

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
    <Container>
      <Avatar source={avatar} />
      <TextsContainer>
        <Texts>
          <Name>{name}</Name>
          <TextMsg>{msgPreview}</TextMsg>
        </Texts>
        <TimeContainer>
          <TimeText hasNewMessages={newMessages !== '0'}>{time}</TimeText>
          {newMessages !== '0' && (
            <NewMsgsCircle>
              <NewMsgs>{newMessages}</NewMsgs>
            </NewMsgsCircle>
          )}
        </TimeContainer>
      </TextsContainer>
    </Container>
  )
}

export default Card
