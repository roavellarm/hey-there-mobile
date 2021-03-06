import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../contexts/auth'
import * as C from '../components'

const Join = () => {
  const { join } = useContext(AuthContext)
  const { navigate } = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleJoin() {
    await join({ name, email, password })

    return navigate('AuthRouter', { screen: 'Chat Room' })
  }

  return (
    <C.Container>
      <C.FormContainer>
        <C.Title>Join Hey There</C.Title>

        <C.Input label="Name" value={name} onChange={e => setName(e)} />
        <C.Input label="Email" value={email} onChange={e => setEmail(e)} />
        <C.Input
          label="Password"
          value={password}
          onChange={e => setPassword(e)}
          isPassword
        />

        <C.Button title="Join" onPress={handleJoin} />
        <C.Link to="/Login" title="Already have an account? Sign In" />
      </C.FormContainer>
    </C.Container>
  )
}

export default Join
