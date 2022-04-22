import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },

    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    
  ]
})

export default router
