import { AxiosResponse } from 'axios'
import api from './index'

interface LoginData {
  email: string
  password: string
}
interface Data {
  token: string
  currentUser: I.CurrentUser
}

export const loginApi = (data: LoginData): Promise<AxiosResponse<Data>> =>
  api.post('/login', data)

interface RegisterData {
  name: string
  email: string
  password: string
}

export const registerApi = (data: RegisterData) => api.post('/register', data)
