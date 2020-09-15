import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../contexts/auth'
import * as C from '../components'

const Login: React.FC = () => {
  const { login } = useContext(AuthContext)
  const { navigate } = useNavigation()
  const [email, setEmail] = useState('xena@gmail.com')
  const [password, setPassword] = useState('Xena@123')

  async function handleLogin() {
    try {
      await login(email, password)

      navigate('AuthRouter', { screen: 'Chats' })

      return true
    } catch (error) {
      // eslint-disable-next-line no-console
      return console.log(error)
    }
  }

  return (
    <C.Container>
      <C.FormContainer>
        <C.Title>Welcome back!</C.Title>
        <C.Input
          label="Email"
          key="email"
          value={email}
          onChange={e => setEmail(e)}
        />
        <C.Input
          label="Password"
          key="password"
          value={password}
          isPassword
          onChange={e => setPassword(e)}
        />
        <C.Button title="Login" onPress={handleLogin} />
        <C.Button title="Go to join" onPress={() => navigate('Join')} />
      </C.FormContainer>
    </C.Container>
  )
}

export default Login
