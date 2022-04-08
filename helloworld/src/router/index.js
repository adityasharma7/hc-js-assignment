import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes = [
  
  {
    path: '/Signup',
    name: 'Signup',
    component : Signup
  },
  {
    path: '/login',
    name: 'Login',
    component : Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
