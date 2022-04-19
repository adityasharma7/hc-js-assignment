import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ProductDetail from '../components/ProductDetail.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/productdetail',
      name: 'ProductDetail',
      component: ProductDetail,
      props: true
    }
  ]
})

export default router
