import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CategoryListing from '../views/CategoryListing.vue'
import LoginPageVue from '../views/LoginPage.vue'
import SignUpPageVue from '../views/SignUpPage.vue'
import ProductDetailPageVue from '../views/ProductDetailPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/:category',
      name: 'category',
      component:CategoryListing
    },
        {
      path: '/login',
      name: 'login',
      component:LoginPageVue
    },
    {
      path: '/SignUp',
      name: 'SignUpPage',
      component:SignUpPageVue
    },
    // {
    //   path: '/ProductDetail/:id',
    //   name: 'ProductDetailPage',
    //   component:ProductDetailPageVue
    // },
    
    
  ]
})

export default router
