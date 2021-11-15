import { createStore } from 'vuex'
import axios from 'axios'
import data from '../assets/data/text.json'
export default createStore({
  state: {
    posts: [],
    error: '',
    name: '',
    password: '',
    count: 0,
    text: data,
    dir: '',
    mod: 2,
    lang: 'en',
    langbutton: 'ar',
    place: ''
  },
  mutations: {
    in (state) {
      state.count++
    },
    de (state) {
      state.count--
    },
    getlang: function (state) {
      state.mod = state.mod + 1
      if (state.mod % 2 === 0) {
        state.dir = 'ltr'
        state.lang = 'en'
        state.langbutton = 'ar'
      } else {
        state.dir = 'rtl'
        state.place = 'right!important'
        state.lang = 'ar'
        state.langbutton = 'en'
      }
    }
  },
  actions: {
    async created ({ state }) {
      try {
        const res = await axios.get('http://localhost:3000/register/')
        state.posts = res.data
      } catch (err) {
        state.error = err.message
      }
    },
    async createUser ({ state }) {
      try {
        await axios.post('http://localhost:3000/register/', {
          name: state.name,
          password: state.password
        })
      } catch (error) {
        console.log(error.message)
      }
    }
  },
  modules: {},
  getters: {}
})
