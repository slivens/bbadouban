import Vue from 'vue'
import Vuex from 'vuex'
import activities from './moudels/activities'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    activities
  }
})
