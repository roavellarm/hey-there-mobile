/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useState,
  ReactChildren,
  ReactElement,
} from 'react'
import { AsyncStorage } from 'react-native'
import { loginApi, registerApi } from '../api/auth'

interface AuthContextData {
  signed: boolean
  currentUser: object | null
  login(email: string, password: string): Promise<void | { error: Error }>
  join(fields: fieldsProps): Promise<void | { error: Error }>
  logout(): void
}

interface fieldsProps {
  name: string
  email: string
  password: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({
  children,
}: {
  children: ReactElement
}): ReactElement => {
  const [currentUser, setCurrentUser] = useState<I.CurrentUser | null>(null)

  async function login(email: string, password: string) {
    try {
      const { data, error } = await loginApi({ email, password })

      await AsyncStorage.setItem('token', data.token)
      await AsyncStorage.setItem(
        'currentUser',
        JSON.stringify(data.currentUser)
      )

      return setCurrentUser(data.currentUser)
    } catch (error) {
      return { error }
    }
  }

  async function join(fields: fieldsProps) {
    try {
      const { data } = await registerApi(fields)

      await AsyncStorage.setItem('token', data.token)
      await AsyncStorage.setItem(
        'currentUser',
        JSON.stringify(data.currentUser)
      )
      return setCurrentUser(data.currentUser)
    } catch (error) {
      return { error }
    }
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
