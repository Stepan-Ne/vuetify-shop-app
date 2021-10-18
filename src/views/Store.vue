<template>
 <v-container>
   <v-row>
     <v-col sm="3" class="col1" offset-lg="1">
       <my-sidebar />
     </v-col>
     <v-col sm="9" class="col2" lg="7">
       <product-display />
     </v-col>
   </v-row>
 </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MySidebar from "@/components/store/Sidebar.vue";
import ProductDisplay from "@/components/store/ProductDisplay.vue";
@Component({
  components: {
    MySidebar, 
    ProductDisplay
  }
})
export default class Stote extends Vue {}
</script>

<style scoped>
.col1 {
  background: wheat;
}
.col2 {
  background: tan;
}
</style>
