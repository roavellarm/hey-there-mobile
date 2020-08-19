import React from 'react'
import StyledContainer from './styles'

interface Props {
  children: React.ReactNode
}
const Profile: React.FC<Props> = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Profile
