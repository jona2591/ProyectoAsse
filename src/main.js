import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var Config = {
  apiKey: "AIzaSyCU2pUChMIuGlbgH5NxJsjPdLasXFhqtso",
  authDomain: "crud-1b08d.app.com",
  databaseURL: "https://crud-1b08d.firebaseio.com",
  projectId: "crud-1b08d",
  storageBucket: "crud-1b08d.appspot.com",
  messagingSenderId: "105255590359",
  appId: "1:105255590359:web:40d1a879ab1d42b1019392"
};

firebase.initializeApp(Config);
window.firebase = firebase;

let app = null
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
