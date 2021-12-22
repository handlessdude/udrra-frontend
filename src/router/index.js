import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tracks',
    name: 'TrackCatalogue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tracks" */ '../views/TrackCatalogue.vue')
  },
  {
    path: '/tracks/:id',
    name: 'Track',
    component: () => import(/* webpackChunkName: "track" */ '../views/Track.vue')
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
  /*{
    path: "/:catchAll(.*)",
    name: "NotFound",
    component:  () => import(/!* webpackChunkName: "NotFound" *!/ '../views/NotFound.vue'),
    meta: {
      requiresAuth: false
    }
  }*/
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'NotFound' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
