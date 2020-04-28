import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Crear.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Crear',
    component: Home
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    component: () => import('../views/Ingreso.vue')  },
  {
    path: '/egreso',
    name: 'Egreso',
    component: () => import('../views/Egreso.vue')
  },
  {
    path: '/Modificacion',
    name: 'Modificacion',
    component: () => import('../views/Modificacion.vue')
  },
  {
    path: '/Movimientos',
    name: 'Movimientos',
    component: () => import('../components/Movimientos.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
