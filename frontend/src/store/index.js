import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    books: [],
    authors: []
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
    }
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter +1 
      commit('SET_COUNTER', newCount)
    },
     async fetchBooks({commit}) {
      const newBooks = await axios.get('http://localhost:3000/book/all/json')
      commit('SET_BOOKS', newBooks.data)
    },
     async fetchAuthors({commit}) {
       const newAuthors = await axios.get('http://localhost:3000/author/all/json')
       commit('SET_AUTHORS', newAuthors.data)
     }
  },
  modules: {
  }
})
