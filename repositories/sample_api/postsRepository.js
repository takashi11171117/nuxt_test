import Repository from './Repository'

const resource = '/posts'
export default {
  get () {
    console.log('i')
    return Repository.get(`${resource}`)
  },
  getPost (postId) {
    return Repository.get(`${resource}/${postId}`)
  }
}
