import HomePage from '../components/HomePage.vue'
import ProductCategoryPage from '../components/ProductCategoryPage.vue'
import ProductDetailPage from '../components/ProductDetailPage.vue'
import UserProfile from '../components/UserProfile.vue'


import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'ProductCategoryPage',
        component:ProductCategoryPage,
        path:'/:category',
        props:true
    },
    {
        name:'ProductDetailPage',
        component:ProductDetailPage,
        path:'/:category/:id',
        props:true
    },
    {
        name:'UserProfile',
        component:UserProfile,
        path:'/UserProfile',
    }
    
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router ;