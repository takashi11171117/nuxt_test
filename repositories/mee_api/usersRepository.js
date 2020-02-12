import Repository from './Repository'

const resource = '/users'
export default {
  get () {
    return Repository.get(`${resource}`)
  },
  getPost (userId) {
    return Repository.get(`${resource}/${userId}`)
  }
}
