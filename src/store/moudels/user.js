import {userlogin, userregister} from '../../api/index'
import axios from 'axios'

const state = {
  login_email: '',
  login_token: '',
  login_name: '',
  temp_email: '',
  temp_token: '',
  temp_name: ''
}

const getters = {
  // Filtering currentUser
  currentUser: state => {
    return {
      email: state.login_email,
      token: state.login_token,
      name: state.login_name
    }
  }
}

const mutations = {
  updateData (state, payload) {
    switch (payload.name) {
      case 'email':
        state.temp_email = payload.value
        break
      case 'token':
        state.temp_token = payload.value
        break
      case 'name':
        state.temp_name = payload.name
        break
      default:
        console.log('Error:Dont directly mutate Vuex store')
    }
  },
  getLocalUser (state) {
    state.login_email = localStorage.getItem('email')
    state.login_token = localStorage.getItem('token')
    state.login_name = localStorage.getItem('name')
  },
  setUser (state, payload) {
    state.login_email = payload.email
    state.login_token = payload.token
    state.login_name = payload.name
  },
  logout (state) {
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    state.login_email = ''
    state.login_token = ''
    state.login_name = ''
  }
}

const actions = {
  /**
   * Login
   * new Promise((resolve, reject) => {})
   * Authorization: 'Bearer ' + token
   * email: payload.email
   * pass: payload.pass
   * name: payload.name
   */
  async login ({ commit }, payload) {
    let logininfo = await userlogin(payload)
    console.log('slw', logininfo)
    axios.interceptors.request.use(
      config => {
        // 这里写死一个token，你需要在这里取到你设置好的token的值
        console.log('token', payload.token)
        const token = 'Bearer ' + payload.token
        if (token) {
          // 这里将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
          config.headers.Authorization = token
        }
        return config
      },
      error => {
        return Promise.reject(error)
      })
    commit({
      type: 'setUser',
      email: logininfo.data.email,
      token: logininfo.data.token,
      name: logininfo.data.name
    })
  },
  /**
   * Register
   * new Promise((resolve, reject) => {})
   * email: payload.email
   * pass: payload.pass
   * name: payload.name
   */
  async register ({ commit }, payload) {
    console.log(111111111)
    let registerinfo = await userregister(payload)
    console.log('reg', registerinfo)
    localStorage.setItem('token', registerinfo.data.token)
    localStorage.setItem('email', registerinfo.data.email)
    localStorage.setItem('name', registerinfo.data.name)
    commit({
      type: 'setUser',
      email: registerinfo.data.email,
      token: registerinfo.data.token,
      name: registerinfo.data.name
    })
    return registerinfo
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
