import React, { useContext, ReactElement } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Link, useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import AuthContext from '../contexts/auth'

const HeaderContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #574b5d;
`

const Text = styled.Text`
  font-family: 'Lato_700Bold';
  letter-spacing: 0.5px;
  font-size: 20px;
  color: #fff;
`

Icon.loadFont()

const Header = (): ReactElement => {
  const { logout } = useContext(AuthContext)
  const { navigate } = useNavigation()

  const handleLogout = () => {
    logout()
    navigate('AuthRouter', { screen: 'Chats' })
  }

  return (
    <HeaderContainer>
      <Link to="/Chats">
        <Text>Chats</Text>
      </Link>
      <Link to="/Profile">
        <Text>Profile</Text>
      </Link>
      <Link to="/Chat Room">
        <Text>Chat Room</Text>
      </Link>
      <Icon name="power-off" color="#fff" size={20} onPress={handleLogout} />
    </HeaderContainer>
  )
}

export default Header
