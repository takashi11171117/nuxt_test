import axios from 'axios'

const baseDomain = 'https://reduxblog.herokuapp.com'
const baseURL = `${baseDomain}/api`

export default axios.create({
  baseURL
})
