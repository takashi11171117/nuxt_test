import axios from 'axios'

const baseDomain = 'http://localhost:9100'
const baseURL = `${baseDomain}/api`

export default axios.create({
  baseURL
})
