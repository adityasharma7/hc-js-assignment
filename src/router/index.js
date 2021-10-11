import Vue from 'vue'
import VueRouter from 'vue-router'
 
Vue.use(VueRouter)
import Category from "@/components/Category/Category.vue";
import Product from "@/components/Category/Product_details.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: "/Category/:category",
    name: "products",
    component: Category,
    props: true,
  },
  {
    path: "/Category/:id",
    name: "product",
    component: Product_details,
    props: true,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
