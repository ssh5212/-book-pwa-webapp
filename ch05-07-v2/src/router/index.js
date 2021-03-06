import Vue from 'vue'
import VueRouter from 'vue-router'

import main_page from '../main_page.vue'
import sub_page from '../sub_page.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: function () {
//       return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//     }
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/main', component: main_page },
    { path: '/sub', component: sub_page },
  ]
})

export default router
