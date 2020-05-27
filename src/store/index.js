import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Pliegos:[]
  },
  mutations: {  
    AgregarPliego(state, Pliego){
      state.Pliegos.push(Pliego);
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