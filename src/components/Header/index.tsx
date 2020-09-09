import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Link, useNavigation } from '@react-navigation/native'
import AuthContext from '../../contexts/auth'
import { HeaderContainer, Text } from './styles'

Icon.loadFont()

const Header: React.FC = () => {
  const { logout } = useContext(AuthContext)
  const { navigate } = useNavigation()

  const handleLogout = () => {
    logout()
    navigate('Login')
  }

  return (
    <HeaderContainer>
      <Link to="/Chats">
        <Text>Chats</Text>
      </Link>
      <Link to="/Profile">
        <Text>Profile</Text>
      </Link>
      <Icon name="power-off" color="#fff" size={20} onPress={handleLogout} />
    </HeaderContainer>
  )
}

export default Header
