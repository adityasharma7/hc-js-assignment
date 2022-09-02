import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ProductDetail from '../components/ProductDetail.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ProductDetail/:id',
      name: 'productDetail',
      component: ProductDetail,
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
