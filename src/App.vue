<template>
  <transition>
    <router-view></router-view>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Layout from '../src/views/Layout.vue';

@Component({
  components: {
    Layout,
  },
})
export default class App extends Vue { }
</script>

<style lang="scss">
@import "@/assets/styles/_index.scss"
</style>
