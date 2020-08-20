import React, { useState } from 'react'
import { AsyncStorage } from 'react-native'
import Container from '../../components/Container'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Title from '../../components/Title'
import FormContainer from '../../components/FormContainer'
import { registerApi } from '../../api/auth'

const Join: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleJoin() {
    try {
      const { data } = await registerApi({ name, email, password })

      await AsyncStorage.setItem('token', data.token)
      await AsyncStorage.setItem(
        'currentUser',
        JSON.stringify(data.currentUser)
      )

      console.log({ token: await AsyncStorage.getItem('token') })
      console.log({ currentUser: await AsyncStorage.getItem('currentUser') })
      return null
    } catch (error) {
      return console.log({ error })
    }
  }

  return (
    <Container>
      <FormContainer>
        <Title>Join Hey There</Title>

        <Input label="Name" value={name} onChange={e => setName(e)} />

        <Input label="Email" value={email} onChange={e => setEmail(e)} />

        <Input
          label="Password"
          value={password}
          onChange={e => setPassword(e)}
          isPassword
        />

        <Button
          style={{ marginTop: '20px' }}
          title="Join"
          onPress={handleJoin}
        />
      </FormContainer>
    </Container>
  )
}

export default Join
