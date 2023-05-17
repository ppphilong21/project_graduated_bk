<template>
    <a-layout style="min-height: 100vh">
        <Slider></Slider>
        <a-layout>
            <Header>
            </Header>
            <a-layout-content style="min-height: 78vh; padding: 12px">
                <a-card style="height: 100%">
                   <a-spin :spinning="loading">
                       <router-view>
                       </router-view>
                   </a-spin>
                </a-card>
            </a-layout-content>
            <Footer></Footer>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Slider from '@/components/Slider.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'




export default Vue.extend({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Layout",

    components: {
        Slider,
        Header,
        Footer,
    },
    data: () => ({
        loading: false
    }),
    computed: {
       
    },
    mounted() {
      
    },
    created() {
       
    },
    methods: {
    }
})
</script>
<style lang="scss">
</style>
