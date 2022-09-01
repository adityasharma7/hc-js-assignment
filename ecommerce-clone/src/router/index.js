import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import("../components/ProductDetails.vue"),
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../components/Login.vue"),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("../components/Register.vue"),
    }
  ]
})

export default router
