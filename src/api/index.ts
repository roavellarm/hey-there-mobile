import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.12:3001',
})

api.interceptors.response.use(
  config => config,
  error => {
    // if (error.response === undefined) {
    //   const networkError = { error: JSON.parse(JSON.stringify(error)).message }
    //   return Promise.reject(networkError)
    // }

    const { status, data } = error.response
    if (status === 400) return Promise.reject(data)
    return Promise.reject(error)
  }
)

export default api
