import React, { useState } from 'react'
import Container from '../../components/Container'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { registerApi } from '../../api/auth'
import { Box, Text } from './styles'

const Join: React.FC = () => {
  const [name, setName] = useState('Rodrigo')
  const [email, setEmail] = useState('rodrigo@gmail.com')
  const [password, setPassword] = useState('Rodrigo@123')

  async function handleJoin() {
    try {
      const { data } = await registerApi({ name, email, password })

      return console.log(data)
    } catch (error) {
      return console.log({ error })
    }
  }

  return (
    <Container>
      <Box>
        <Text>Join Hey There</Text>

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
      </Box>
    </Container>
  )
}

export default Join
