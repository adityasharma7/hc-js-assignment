import { createRouter, createWebHistory } from 'vue-router'
import Registration from '../components/Registration'
import Login from '../components/Login'
import Redirect from '../components/Redirect'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/redirect',
      name: 'Redirect',
      component: Redirect
    }
  ]
})

export default router
