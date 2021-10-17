<template>
  <v-container mb-12>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2" class="prod__header">
        <h1>Popular Prod <v-btn to="store" text color="primary" small>View All</v-btn></h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <v-row>
          <v-col sm="6" md="4">
            Item
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class PopularProducts extends Vue {}
</script>

<style scoped>
.prod__header {
  background: sandybrown;
}
</style>
