import axios from 'axios'
console.log(123222222)
const state = {
  skip: 0,
  events: [],
  eventItem: {}
}
const mutations = {
  loadMore (state, payload) {
    console.log(222222222)
    state.skip += 3
    state.events = state.events.concat(payload.res)
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
    console.log('eventitem', state.eventItem)
  }
}
const actions = {
  async loadMore ({commit, state}) {
    console.log(111111111)
    let response = await axios.get(`/api/event/list?loc=108288&start=${state.skip}&count=3`)
    console.log('res', response.data.events)
    commit({
      type: 'loadMore',
      res: response.data.events
    })
  },
  async getSingleEvent ({commit, state}, payload) {
    let resDetail = await axios.get(`/api/event/${payload.id}`)
    console.log('resDetail', resDetail)
    commit({
      type: 'getSingleEvent',
      res: resDetail.data
    })
  }

}
export default {
  state,
  mutations,
  actions
}
