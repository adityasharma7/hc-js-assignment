import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CategoryListing from '../views/CategoryListing.vue'
import LoginPageVue from '../views/LoginPage.vue'
import SignUpPageVue from '../views/SignUpPage.vue'
import ProductDetailPageVue from '../views/ProductDetailPage.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import store from '../../Store/index.js'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage

    },
    {
      path: '/product/:category',
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

    {  
      path:'/productdetail/:id',
      name:'ProductDetailPage',
      component:ProductDetailPageVue,
    },
    {  
      path:'/profile',
      name:'Profile',
      component:Profile,
      beforeEnter: (to,from,next) =>{
        if(!store.state.token){
          next({ name: 'login' })
        }else{
          next()
        }
      }
    },
    {  
      path:'/Cart',
      name:'Cart',
      component:Cart,
      beforeEnter: (to,from,next) =>{
        if(!store.state.token){
          next({ name: 'login' })
        }else{
          next()
        }
      }
    }



    
    
  ]
})

// const isAuthenticated = false

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })

//   else next()
// })

export default router
