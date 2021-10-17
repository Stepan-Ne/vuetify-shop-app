import Vue from 'vue'
import Vuex from 'vuex'
import Cart from '@/store/cart'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    Cart
  }
})
export default store;