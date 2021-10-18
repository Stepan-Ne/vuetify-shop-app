<template>
  <v-card outlined>
    <v-img :src="prod.image" height="200px" />
    <v-card-title>{{ prod.name }}</v-card-title>
    <v-card-subtitle>{{ prod.price }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="success" outlined @click="updateSnackbar">
        <v-icon small left>mdi-plus</v-icon>
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop,  Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import {ProdI} from "@/store/cart";
const cart = namespace("Cart");
@Component({})
export default class VerticalProduct extends Vue {
@Prop(Object) readonly prod!: ProdI
// @Prop(Number) readonly index!: number

  @cart.Mutation
  public addItemToCart!: ({itemId: 1, quantity: 1})
  // @cart.Mutation
  public updateSnackbar() {
    this.$store.commit("Cart/updateSnackbar", {show: true});
     this.$store.commit("Cart/addItemToCart", {itemId: 1, quantity: 1});
  }
}
</script>

<style scoped>
.prod__header {
  background: sandybrown;
}
</style>
