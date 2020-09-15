import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.0.15:3001',
  // 'https://heythere-staging-api.herokuapp.com',
})

export default api
