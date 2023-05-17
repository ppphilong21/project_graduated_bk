<template>
  <a-page-header style="border: 1px solid rgb(235, 237, 240)">
    <a-breadcrumb separator=">">
      <a-breadcrumb-item v-for="route in routes" :key="route.id">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <span v-else @click="onClickBread(route)" style="cursor: pointer; text-transform: capitalize;">
          {{ route.breadcrumbName }}
        </span>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <!-- :breadcrumb="{ props: { routes } }" -->
  </a-page-header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",

  data: () => ({
    currentRoute: '/dashboard',
    rootCurrentRoute: '/dashboard',
    routes: [] as any,
  }),
  watch: {
    '$route': {
      handler(to) {
        if (this.routes.length != 0) {
          this.routes = []
        }
        if (to.matched.length > 1) {
          for (let i = 1; i < to.matched.length; i++) {
            this.routes.push({
              path: to.matched[i].path ? to.matched[i].path : '',
              breadcrumbName: to.matched[i].meta.title ? to.matched[i].meta.title : ''
            })
          }
        }
        console.log(this.routes)
      },
      immediate: true
    }
  },
  computed: {

  },
  mounted() {

  },
  created() {

  },
  methods: {
    onClickBread(item: any) {
      this.$router.push(item.path)
    }
  }
})
</script>
<style lang="scss"></style>
