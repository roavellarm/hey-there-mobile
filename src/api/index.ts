import axios from 'axios'

const api = axios.create({
  baseURL: 'https://heythere-staging-api.herokuapp.com',

  // 'http://192.168.0.15:3001',
})

export default api
