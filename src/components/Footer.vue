<template> 
    <a-layout-footer class="flex justify-center" style="    height: 6%;
    display: flex;
    justify-content: center;
    align-items: center;">
        {{ 'Copyright' }} © {{ new Date().getFullYear() }}
    </a-layout-footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
    data: () => ({}),
    methods: {},
})
</script>
