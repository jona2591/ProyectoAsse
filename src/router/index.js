import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Crear.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Crear',
    component: Home,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    component: () => import('../views/Ingreso.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/egreso',
    name: 'Egreso',
    component: () => import('../views/Egreso.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/Modificacion',
    name: 'Modificacion',
    component: () => import('../views/Modificacion.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/Movimientos',
    name: 'Movimientos',
    component: () => import('../components/Movimientos.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Registrar',
    name: 'Registrar',
    component: () => import('../views/Registrar.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) =>{
  if(to.matched.some(ruta => ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser;
    if(user){
      next();
    }else{
      next({
        name: 'Login'
      })
    }
  }else{
    next();
  }
})

export default router
