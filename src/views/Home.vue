<template>
  <div class="home">
    <my-header />
    <popular-products />
    <my-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyHeader from "../components/home/Header.vue";
import MyFooter from "../components/home/Footer.vue";
import PopularProducts from "../components/home/PopularProducts.vue";
@Component({
  components: {MyHeader, MyFooter, PopularProducts}
})
export default class Home extends Vue {}
</script>
