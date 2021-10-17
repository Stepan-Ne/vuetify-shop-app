// import Vue from 'vue'
// import Vuex from 'vuex'

import products from "../../products"

import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
@Module({ namespaced: true, name: 'test' })
class User extends VuexModule {
  public name: string = ''
  @Mutation
  public setName (newName: string): void {
    this.name = newName
  }
  @Action
  public updateName (newName: string): void {
    this.context.commit('setName', newName)
  }
}
export default User
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products,
    snackbar:  {
      show: false, 
      variant: 'success', 
      message: 'Succwss! Item added to the cart', 
      quantity: 0
    }, 
    cart: []
  },
  mutations: {
    addItemToCart(state, payload) {
      const {itemId, quantity} = payload;
      const idx = state.cart.findIndex((product: any) => {
        return product.itemId === itemId
      })
      if (idx === -1) {
        state.cart.push({itemId, quantity} as never)
      } else {
        state.cart[idx].quantity += 1;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
