import Vue from 'vue'
import Vuex from 'vuex'
import calc from '@/store/modules/calc'
import settings from '@/store/modules/settings'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    calc,
    settings,
  },
  plugins: [
    new VuexPersistence({
      reducer: (state) => ({
        calc: { breakdown: state.calc.breakdown },
        settings: { variables: state.settings.variables },
      }),
    }).plugin,
  ],
})
