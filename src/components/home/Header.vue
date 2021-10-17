<template>
<v-container class="">
  <v-row
  align="center"
  justify="center"
  >
     <v-sheet :height="sheetHeight" class="sheet">
    <h1
    class="text-center display-3 hidden-xs-only"
    >Welcome to Awesome Shop!</h1>
    <h1
    class="text-center display-1 hidden-sm-and-up"
    >Welcome to Awesome Shop!</h1>
  </v-sheet>
  </v-row> 
</v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Header extends Vue {

  get sheetHeight() {
    switch(this.$vuetify.breakpoint.name) {
      case 'xs': return '200px';
      case 'sm': return '300px';
      case 'md': return '300px';
      case 'lg': return '300px';
      case 'xl': return '350px';
    }
    return '300px';
  }
}
</script>
<style scoped>
.sheet {
  background: rosybrown;
}
</style>
