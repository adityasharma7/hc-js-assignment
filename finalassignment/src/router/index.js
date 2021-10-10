import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props:true
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
 { name:'Category',
        
        path: "/category/:category",
        component: () =>
      import(/* webpackChunkName: "about" */ "../components/products.vue"),
        props:true,
},
{ name:'CategoryDetail',
        
        path: "/category/:id",
        component: () =>
      import(/* webpackChunkName: "about" */ "../components/productdetails.vue"),
        props:true,
},
// { name:'login',
        
//         path: "/login",
//         component: () =>
//       import(/* webpackChunkName: "about" */ "../components/login.vue"),
//         props:true,
// },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
