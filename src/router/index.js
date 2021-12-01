import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../pages/Home.vue')
const Register = () => import('../pages/Register.vue')
const Play = () => import('../pages/Play.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/game',
    name: 'Play',
    component: Play,
    meta: { transition: 'slide-left' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
