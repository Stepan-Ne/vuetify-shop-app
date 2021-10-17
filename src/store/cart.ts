interface ProdI {
  image: string
  name: string
  price: number
}
interface snackI {
  show: boolean
  variant: string
  message: string
  quantity: number
}
interface paylo {
  itemId: number
   quantity: number
}
import products1 from "../../products"

import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
@Module({ namespaced: true, name: 'product' })
class Cart extends VuexModule {
  public products: ProdI[] = products1
  snackbar: snackI =  {
      show: false, 
      variant: 'success', 
      message: 'Succwss! Item added to the cart', 
      quantity: 0
    }
    cart: any =  []

  @Mutation
  public addItemToCart (payload: paylo) {
      const {itemId, quantity} = payload;
      const idx = this.cart.findIndex((product: any) => {
        return product.itemId === itemId
      })
      if (idx === -1) {
        this.cart.push({itemId, quantity} as never)
      } else {
        this.cart[idx].quantity += 1;
      }
    }
  // @Action
  // public updateName (newName: string): void {
  //   this.context.commit('setName', newName)
  // }
}
export default Cart;

