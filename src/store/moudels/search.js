import axios from 'axios'

const state = {
  queryRes_movie: [],
  queryRes_book: [],
  queryRes_music: []
}

const mutations = {
  query (state, payload) {
    switch (payload.tag) {
      case 'movie':
        state.queryRes_movie = payload.res
        break
      case 'book':
        state.queryRes_book = payload.res
        break
      case 'music':
        state.queryRes_music = payload.res
        break
      default:
        console.log('[Error]:Api is error!')
    }
  }
}

const actions = {
  /**
   * Search
   * queryStr: String
   * count: 3 default
   */
  async query ({ commit }, payload) {
    const reponse = await axios.get(`/api/movie/search?q=${payload.queryStr}&count=3`)
    commit({
      type: 'query',
      tag: 'movie',
      res: reponse.data.subjects
    })
  }
}

export default {
  state,
  mutations,
  actions
}
