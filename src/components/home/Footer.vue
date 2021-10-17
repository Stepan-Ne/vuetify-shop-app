<template>
 <v-footer absolute class="pa-4">
   &copy; {{ new Date().getFullYear() }} - <strong> Awesome Shop</strong>
 </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Footer extends Vue {}
</script>
