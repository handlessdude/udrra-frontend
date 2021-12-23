import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue')
  },
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

router.beforeEach((to, from, next) => {
  const publicPages = [ '/auth', '/about' ]
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  //console.log(to, from, next)
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/auth')
  } else {
    next()
  }
})

export default router
