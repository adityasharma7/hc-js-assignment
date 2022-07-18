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
      component:CategoryListing,

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

    {   name:'ProductDetailPage',
        path:'/:id',
        component:ProductDetailPageVue
      }

    
    
  ]
})

// const isAuthenticated = false

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })

//   else next()
// })

export default router
