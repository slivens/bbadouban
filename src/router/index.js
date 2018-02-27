import Vue from 'vue'
import Router from 'vue-router'
import Pages from '../pages/pages.vue'
import MovieView from '../pages/MovieView.vue'
import BookView from '../pages/BookView.vue'
import GroupView from '../pages/GroupView.vue'
import StatusView from '../pages/StatusView.vue'
import Home from '../pages/Home.vue'
import Detail from '../components/Detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home',
      name: 'Pages',
      component: Pages,
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: Home
        },
        {
          path: '/MovieView',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: '/BookView',
          name: 'BookView',
          component: BookView
        },
        {
          path: '/GroupView',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: '/StatusView',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: '/Detail/:id',
          name: 'Detail',
          component: Detail
        }
      ]
    }
  ]
})
