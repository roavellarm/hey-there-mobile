import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../contexts/auth'
import * as C from '../components'

const Login = () => {
  const { login } = useContext(AuthContext)
  const { navigate } = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    const { error } = await login(email, password)

    if (error) return { error }

    return navigate('AuthRouter', { screen: 'Chats' })
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
        <C.Link title="Not registered? Join here" to="/Join" />
      </C.FormContainer>
    </C.Container>
  )
}

export default Login
