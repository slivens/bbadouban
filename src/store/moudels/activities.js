
import {activities, singledata} from '../../api/index'
const state = {
  skip: 0,
  events: [],
  eventItem: {}
}
const mutations = {
  loadMore (state, payload) {
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
    let response = await activities(state)
    commit({
      type: 'loadMore',
      res: response.data.events
    })
  },
  async getSingleEvent ({commit, state}, payload) {
    let resDetail = await singledata(payload)
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
