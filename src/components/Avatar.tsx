import React from 'react'
import { ImageSourcePropType } from 'react-native'
import styled from 'styled-components/native'

const StyledAvatar = styled.Image`
  width: ${({ size }: { size: number }) => `${size}px` || '50px'};
  height: ${({ size }) => `${size}px` || '50px'};
  border-radius: 100px;
  margin-right: 6px;
`
interface Props {
  source: ImageSourcePropType
  size: number
}

const Avatar = ({ source, size }: Props) => {
  return <StyledAvatar source={source} size={size} />
}

export default Avatar
