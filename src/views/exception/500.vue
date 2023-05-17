<template>
     <a-result status="500" title="500" :sub-title="'Sorry, the server is wrong.'">
        <template #extra>
            <a-button type="primary" @click="backHome">
                {{ 'Back Home'}}
            </a-button>
        </template>
    </a-result>
 </template>
 
 <script lang="ts">
 import Vue from 'vue'
 
 export default Vue.extend({
     // eslint-disable-next-line vue/multi-word-component-names
     name: "500",
 
     components: {
       
     },
     data: () => ({
      
     }),
     computed: {
        
     },
     mounted() {
       
     },
     created() {
        
     },
     methods: {
        backHome() {
            this.$router.push('/')
        }
     }
 })
 </script>
 <style lang="scss">
 </style>
 
