import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import Checkout from '../views/Checkout.vue'
import Cart from '../views/Cart.vue'
import ThankYou from '../views/ThankYou.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/store',
    name: 'Store',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Store.vue')
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout
  },
  {
    path: "/than-kyou",
    name: "ThankYou",
    component: ThankYou
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
