import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserLog: null,
    Usermail: null
  },
  mutations: {
    observer() {
      let user = firebase.auth().currentUser;
      if (user) {
        this.state.UserLog = user.displayName;
        this.state.Usermail = user.email;
      } else {
        this.state.UserLog = null;
        this.state.Usermail = null;
      }
    },
  },
  actions: {
  },
  modules: {
  }
})