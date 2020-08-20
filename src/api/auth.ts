/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import api from './index'

interface LoginData {
  email: string
  password: string
}

export const loginApi = (data: LoginData) => api.post('/login', data)

interface RegisterData {
  name: string
  email: string
  password: string
}

export const registerApi = (data: RegisterData) => api.post('/register', data)
