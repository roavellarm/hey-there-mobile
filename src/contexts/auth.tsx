/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useState } from 'react'
import { AsyncStorage } from 'react-native'
import { loginApi, registerApi } from '../api/auth'

interface AuthContextData {
  signed: boolean
  currentUser: object | null
  login(email: string, password: string): Promise<void>
  join(fields: fieldsProps): Promise<void>
  logout(): void
}

interface fieldsProps {
  name: string
  email: string
  password: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<object | null>(null)

  async function login(email: string, password: string) {
    const { data } = await loginApi({ email, password })

    await AsyncStorage.setItem('token', data.token)
    await AsyncStorage.setItem('currentUser', JSON.stringify(data.currentUser))

    setCurrentUser(data.currentUser)
  }

  async function join(fields: fieldsProps) {
    const { data } = await registerApi(fields)

    await AsyncStorage.setItem('token', data.token)
    await AsyncStorage.setItem('currentUser', JSON.stringify(data.currentUser))
    return setCurrentUser(data.currentUser)
  }

  function logout() {
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!currentUser, currentUser, join, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
