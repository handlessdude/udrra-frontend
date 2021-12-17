import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalogue',
    name: 'TrackCatalogue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "catalogue" */ '../views/TrackCatalogue.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  /*{
    path: '*',
    name: "NotFound",
    component: () => import(/!* webpackChunkName: "NotFound" *!/ '../views/NotFound.vue')
  }*/
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component:  () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
