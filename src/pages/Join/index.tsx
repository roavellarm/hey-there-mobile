import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import { useForm } from 'react-hook-form'
import Container from '../../components/Container'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Box, Title } from './styles'

type FormInputs = {
  name: string
  email: string
  password: string
}

const Join: React.FC = () => {
  const { register, setValue, handleSubmit } = useForm<FormInputs>()

  function onSubmit(data: FormInputs) {
    Alert.alert('Dados: ', JSON.stringify(data))
  }

  useEffect(() => {
    register({ name: 'name' }, { required: true })
    register({ name: 'email' }, { required: true })
    register({ name: 'password' }, { required: true })
  }, [register])

  return (
    <Container>
      <Box>
        <Title>Join Hey There</Title>

        <Input key="email" label="Email" onChange={text => setValue(text)} />

        {/* <Label>Name</Label>
        <Input
          onChangeText={text => setValue(text)}
          placeholder="Name"
          placeholderTextColor="silver"
        />

        <Label>Email</Label>
        <Input
          onChangeText={text => setValue(text)}
          placeholder="Email"
          autoCompleteType="email"
          placeholderTextColor="silver"
        />

        <Label>Password</Label>
        <Input
          secureTextEntry
          onChangeText={text => setValue(text)}
          placeholder="Password"
          placeholderTextColor="silver"
        /> */}

        <Button title="Join" onPress={handleSubmit(onSubmit)} />
      </Box>
    </Container>
  )
}

export default Join
