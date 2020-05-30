import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    books: [],
    authors: [],
    author: {}

  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter =newCount
    },
    SET_BOOKS(state, data){
      state.books = data
    },
    SET_AUTHORS(state, data){
      state.authors = data
    },
    SET_AUTHOR(state, data){
      state.author = data
    }
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter +1 
      commit('SET_COUNTER', newCount)
    },
     async fetchBooks({commit}) {
      const newBooks = await axios.get(`${process.env.VUE_APP_API_URL}/book/all/json`)
      commit('SET_BOOKS', newBooks.data)
    },
     async fetchAuthors({commit}) {
       const newAuthors = await axios.get(`${process.env.VUE_APP_API_URL}/author/all/json`)
       commit('SET_AUTHORS', newAuthors.data)
     },
     async fetchAuthor({commit}, id){
       const infoAuthor = await axios.get(`${process.env.VUE_APP_API_URL}/author/${id}/json`)
       commit ('SET_AUTHOR', infoAuthor.data)
      }
  },
  modules: {
  }
})
