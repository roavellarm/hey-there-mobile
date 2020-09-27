import React from 'react'
import styled from 'styled-components/native'
import profile from '../mocks/profile'
import { Container, Avatar } from '../components'

export const Text = styled.Text`
  font-family: 'Lato_400Regular';
  letter-spacing: 1px;
  line-height: 26px;
  font-size: 18px;
  color: #fff;
`
export const Box = styled.View`
  width: 100%;
  max-width: 500px;
  min-height: 250px;
  align-items: center;
  justify-content: center;
  background-color: #5a4e61;
  border-radius: 8px;
`

const Profile = () => {
  return (
    <Container>
      <Box>
        <Avatar source={profile.avatarImg} size={100} />

        <Text>{`Name: ${profile.name}`}</Text>
        <Text>{`Email: ${profile.email}`}</Text>
        <Text>{`Status: ${profile.statusMessage}`}</Text>
      </Box>
    </Container>
  )
}

export default Profile
