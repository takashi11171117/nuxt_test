import Repository from './Repository'

const resource = '/userlists'
export default {
  get() {
    return Repository.get(`${resource}`)
  },
  getPost(userId) {
    return Repository.get(`${resource}/${userId}`)
  }
}
