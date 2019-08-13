import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    wpisShow: false,
    searchValue: ''
  },
  mutations: {
    showwp (state) {
      state.wpisShow = !state.wpisShow
    },
    setSearchValue (state, val) {
      state.searchValue = val
    }
  }
})

export default store
