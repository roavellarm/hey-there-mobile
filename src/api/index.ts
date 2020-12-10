import axios from 'axios'

const api = axios.create({
  // baseURL: 'exp://192.168.0.15:3001',

  baseURL: 'https://heythere-staging-api.herokuapp.com',
})

api.interceptors.response.use(
  config => config,
  error => {
    const { status, data } = error.response
    if (status === 400) return Promise.reject(data)
    return Promise.reject(error)
  }
)

export default api
