import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obj: ''
  },
  mutations: {
    saveObj(state, obj) {
      state.obj = obj;
    }
  },
  actions: {
  },
  modules: {
  }
})
