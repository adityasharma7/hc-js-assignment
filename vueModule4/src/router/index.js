import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Category from '../components/Category.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',

      component: Category
    }
  ]
})

export default router
