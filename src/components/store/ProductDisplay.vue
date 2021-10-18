<template>
<div class="">
  <h3>Product</h3>
  <v-row>
    <v-col
    sm="6"
   md="4"
    v-for="prod in $store.state.Cart.products"
    :key="prod.name"
    >
      <vertical-product :prod="prod"/> 
    </v-col>
  </v-row>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VerticalProduct from "@/components/cards/VerticalProduct.vue";
@Component({
  components: {VerticalProduct}
})
export default class ProductDisplay extends Vue {

}
</script>
<style scoped>
.sheet {
  background: rosybrown;
}
</style>
