import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Restaurantes from '../views/Restaurantes.vue'
import Restaurante from '../views/Restaurante.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro
  },
  {
    path: '/restaurantes',
    name: 'restaurantes',
    component: Restaurantes
  },
  {
    path: '/restaurante',
    name: 'restaurante',
    component: Restaurante
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
