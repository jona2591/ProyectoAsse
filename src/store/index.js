import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserLog: null
  },
  mutations: {

    observer() {
      let user = firebase.auth().currentUser;
      if (user) {
        this.state.UserLog = user.displayName;
      } else {
        this.state.UserLog = null;
      }
    },
  },
  actions: {
  },
  modules: {
  }
})