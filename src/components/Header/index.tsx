import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Link } from '@react-navigation/native'
import { HeaderContainer, Text } from './styles'

Icon.loadFont()

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to="/Chats">
        <Text>Chats</Text>
      </Link>
      <Link to="/Chat Room">
        <Text>Chat Room</Text>
      </Link>
      <Link to="/Profile">
        <Text>Profile</Text>
      </Link>
      <Link to="/Join">
        <Text>Join</Text>
      </Link>
      <Link to="/Login">
        <Text>Login</Text>
      </Link>
      <Icon name="power-off" color="#fff" size={20} />
    </HeaderContainer>
  )
}

export default Header
