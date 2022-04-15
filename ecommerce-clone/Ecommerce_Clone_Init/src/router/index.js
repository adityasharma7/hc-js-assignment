import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Categories from '../components/Categories.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
  ]
})

export default router
