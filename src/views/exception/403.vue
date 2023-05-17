<template>
    <a-result status="403" title="403" :sub-title="'Sorry, you are not authorized to access this page.'">
        <template #extra>
            <a-button type="primary" @click="backHome">
                {{ 'Back Home' }}
            </a-button>
        </template>
    </a-result>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "403",

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
