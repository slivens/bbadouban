import Vue from 'vue'
import Vuex from 'vuex'
import activities from './moudels/activities'
import movies from './moudels/movies'
import subject from './moudels/subject'
import book from './moudels/book'
import group from './moudels/group'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    activities,
    movies,
    subject,
    book,
    group
  }
})
