import React from 'react'
import { ImageSourcePropType } from 'react-native'
import StyledAvatar from './styles'

interface Props {
  source: ImageSourcePropType
  size: number
}

const Avatar: React.FC<Props> = ({ source, size }: Props) => {
  return <StyledAvatar source={source} size={size} />
}

export default Avatar
