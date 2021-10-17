<template>
  <v-app>
    <top-nav />
    <v-main>
      <router-view />
    </v-main>
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
