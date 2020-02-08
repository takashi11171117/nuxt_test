const backendURL = 'https://ebook-homebrew.herokuapp.com/'

export const state = () => ({
  status: '',
  version: ''
})

export const getters = {
  getStatus (state) {
    return state.status
  },
  getVersion (state) {
    return state.version
  }
}

export const mutations = {
  setStatus (state, status) {
    state.status = status
  },
  setVersion (state, version) {
    state.version = version
  }
}

export const actions = {
  async fetchServerInfo ({ commit }) {
    console.log('iiiii')
    await this.$axios.get(`${backendURL}status`).then((response) => {
      console.log(response)
      commit('setStatus', response.data.status)
      commit('setVersion', response.data.version)
    }).catch((err) => {
      console.log(err)
      commit('setStatus', 'error')
      commit('setVersion', 'error')
    })
  }
}
