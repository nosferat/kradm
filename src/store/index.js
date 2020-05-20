import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabs: {
      active: 'ImportTour',
      list: {
        'ImportTour': {label: 'Import'},
        'PanoContent': {label: 'Pano Content'},
        'SceneEditor': {label: 'Scenes'},
        'XmlEditor': {label: 'XML'},
      }
    }
  },

  mutations: {
    showTab: (state, i) => state.tabs.active = i,
  },

  actions: {},

  modules: {}
})
