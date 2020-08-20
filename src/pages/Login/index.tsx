import React, { useState } from 'react'
import { AsyncStorage } from 'react-native'
import Container from '../../components/Container'
import FormContainer from '../../components/FormContainer'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { loginApi } from '../../api/auth'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    const { data } = await loginApi({ email, password })

    await AsyncStorage.setItem('token', data.token)
    await AsyncStorage.setItem('currentUser', JSON.stringify(data.currentUser))

    console.log({ token: await AsyncStorage.getItem('token') })
    console.log({ currentUser: await AsyncStorage.getItem('currentUser') })
    return null
  }

  return (
    <Container>
      <FormContainer>
        <Title>Welcome back!</Title>
        <Input
          label="Email"
          key="email"
          value={email}
          onChange={e => setEmail(e)}
        />
        <Input
          label="Password"
          key="password"
          value={password}
          isPassword
          onChange={e => setPassword(e)}
        />
        <Button title="Login" onPress={handleLogin} />
      </FormContainer>
    </Container>
  )
}

export default Login
