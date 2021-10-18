<template>
  <v-app>
    <top-nav />
    <v-main>
      <router-view />
    </v-main>
    <v-snackbar
    v-model="$store.state.Cart.snackbar.show"
    :multi-line="true"
    :right="true"
    :top="true"
    :timeout="6000"
    :color="$store.state.Cart.snackbar.variant"
    >
      {{$store.state.Cart.snackbar.message}}
      <v-btn
      dark
      text
      @click="$store.commit('Cart/updateSnackbar', {show: false})"
      >
          Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopNav from "./components/TopNav.vue";
@Component({
  components: { TopNav },
})
export default class App extends Vue {}
</script>
