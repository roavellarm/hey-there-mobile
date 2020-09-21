import React from 'react'
import { ImageSourcePropType } from 'react-native'
import Avatar from '../Avatar'
import * as S from './styles'

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
  onPress(): void
}

const Card: React.FC<CardProps> = ({ cardInfo, onPress }: CardProps) => {
  const { avatar, name, msgPreview, time, newMessages } = cardInfo

  return (
    <S.Container onPress={onPress}>
      <Avatar source={avatar} size={50} />
      <S.TextsContainer>
        <S.Texts>
          <S.Name>{name}</S.Name>
          <S.TextMsg>{msgPreview}</S.TextMsg>
        </S.Texts>
        <S.TimeContainer>
          <S.TimeText hasNewMessages={newMessages !== '0'}>{time}</S.TimeText>
          {newMessages !== '0' && (
            <S.NewMsgsCircle>
              <S.NewMsgs>{newMessages}</S.NewMsgs>
            </S.NewMsgsCircle>
          )}
        </S.TimeContainer>
      </S.TextsContainer>
    </S.Container>
  )
}

export default Card
