import axios from 'axios'

const api = axios.create({
<<<<<<< HEAD
  baseURL: 'https://heythere-staging-api.herokuapp.com',

  // 'http://192.168.0.15:3001',
=======
  // baseURL: 'http://192.168.1.12:3001',
  baseURL: 'https://heythere-staging-api.herokuapp.com',
>>>>>>> bc6373c2cd54b2dee5aaeee3260538689eae2c83
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
