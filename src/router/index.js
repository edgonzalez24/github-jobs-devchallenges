/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobView from '@/views/JobView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/job/:id',
    name: 'job',
    component: JobView
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0, y: 0 
    }
  },
  routes
})

export default router
