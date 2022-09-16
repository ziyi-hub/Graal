import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  actions: {},
  modules: {},
  mutations: {
    /**
     * Stocker username d'un admin
     * @param  state et admin
     * @param admin
     */
    setAdmin(state, admin) {
      state.admin = admin
    },

    /**
     * Stocker un status de connexion
     * @param  state et connected
     * @param connected
     */
    setConnected(state, connected) {
      state.connected = connected
    },

    /**
     * Stocker un token
     * @param  state et token
     * @param token
     */
    setToken(state, token) {
      state.token = token
    },
  },
  plugins: [vuexLocal.plugin],
  state: {
    admin: "",
    connected: false,
    token: "",
  },
})
