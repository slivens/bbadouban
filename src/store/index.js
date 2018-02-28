import Vue from 'vue'
import Vuex from 'vuex'
import activities from './moudels/activities'
import movies from './moudels/movies'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    activities,
    movies
  }
})
