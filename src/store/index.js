import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabs: {
      active: 0,
      list: ['Import', 'Pano Content', 'Scenes', 'XML']
    }
  },

  mutations: {
    showTab: (state, i) => state.tabs.active = i,
  },

  actions: {},

  modules: {}
})
