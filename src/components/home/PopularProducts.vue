<template>
  <v-container mb-12>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2" class="prod__header">
        <h1>Popular Prod <v-btn to="store" text color="primary" small>View All</v-btn></h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row>
          <v-col sm="6" md="4"
          v-for="(prod, i) in products.slice(0, 3)"
          :key="prod.name"
          >
           <vertical-product :prod="prod" :index="i"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from 'vuex-class'
import {ProdI} from "@/store/cart";
import VerticalProduct from "@/components/cards/VerticalProduct.vue"
const cart = namespace('Cart')
@Component({
  components: {VerticalProduct}
})
export default class PopularProducts extends Vue {
  @cart.State
  public products!: ProdI
  // @cart.Mutation
  // public addItemToCart!: ({itemId: index, quantity}: any) => void

  addToCArt(index: any, quantity = 1) {
    this.$store.commit('addItemToCart', {itemId: 1, quantity: 1})
    this.$store.commit('updateSnackbar', {show: true})
  }
}
</script>

<style scoped>
.prod__header {
  background: sandybrown;
}
</style>
