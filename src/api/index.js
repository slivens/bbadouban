import axios from 'axios'

export const activities = (state) => axios.get(`/api/event/list?loc=108288&start=${state.skip}&count=3`)
export const singledata = (payload) => axios.get(`/api/event/${payload.id}`)
export const bookXugou = (bookxugou) => axios.get('/api/book/search?q=虚构类&count=8')
export const bookBuxu = (bookbuxu) => axios.get('/api/book/search?q=非虚构类&count=8')
export const bookTravel = (travel) => axios.get('/api/book/search?q=旅行&count=8')
export const theaters = (theaters) => axios.get('api/movie/in_theaters?count=8')
export const soonData = (soondata) => axios.get('/api/movie/coming_soon?count=8')
export const topData = (topdata) => axios.get('/api/movie/top250?count=8')
export const search = (payload) => axios.get(`/api/movie/search?q=${payload.queryStr}&count=3`)
export const subjectmovie = (payload) => axios.get(`/api/movie/subject/${payload.id}`)
export const subjectbook = (payload) => axios.get(`/api/book/${payload.id}`)
export const userlogin = (payload) => axios.get('https://douban.herokuapp.com/user/' + payload.email)
export const userregister = (payload) => axios.post('https://douban.herokuapp.com/user/', {
  email: payload.email,
  pass: payload.pass,
  name: payload.name
})
