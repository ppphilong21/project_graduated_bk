<template>
    <a-result status="404" title="404" :sub-title="'Sorry, the page you visited does not exist.'">
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
    name: "404",

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
