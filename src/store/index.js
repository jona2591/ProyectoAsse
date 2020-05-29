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
        this.UserLog = null;
      }
    },

    // firebase.database().ref('Pliegos').push(this.Pliego);

    // AgregarPliego(state, Pliego){
    //   state.Pliegos.push(Pliego);
  },
  actions: {
    // AgregarPliegoAction(context, pliego){
    //     context.commit('AgregarPliego', pliego);
    // }
  },
  modules: {
  }
})