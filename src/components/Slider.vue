<template>
    <a-layout-sider v-model="collapsed" collapsible>
        <div style="display: flex;
    justify-content: space-between; align-items: center; padding: 12px;">
            <img class="logo" src="../assets/logo.png" style="width: 24%;" />
            <div style="color: white">HUST MANAGEMENT</div>
        </div>
        <a-menu theme="dark" :selectedKeys="[currentRoute]" mode="inline">
            <template v-for="item in menus">
                <template v-if="!item.hide">
                    <a-menu-item :key="item.link" v-if="!item.children">
                        <a :href="item.link" @click="onClickMenu(item, $event)">
                            <a-icon :type="item.icon" />
                            <span>{{ item.title }}</span>
                        </a>
                    </a-menu-item>
                    <a-sub-menu :key="item.link" v-else>
                        <div class="a__item" slot="title">
                            <a :href="item.link" @click="onClickMenu(item, $event)">
                                <a-icon :type="item.icon" />
                                <span>{{ item.title }}</span>
                            </a>
                        </div>
                        <a-menu-item :key="subMenu.link" v-for="subMenu in item.children">
                            <a :href="subMenu.link" @click="onClickMenu(subMenu, $event)">
                                <span>{{ subMenu.title }}</span>
                            </a>
                        </a-menu-item>
                    </a-sub-menu>
                </template>
            </template>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Slider",

    data: () => ({
        collapsed: false,
        rootCurrentRoute: '/dashboard',
        currentRoute: '/dashboard',
        menus: [
            {
                'icon': 'home',
                'title': 'Dashboard',
                'name': 'dashboard',
                'link': '/dashboard'
            },
            {
                'icon': 'phone',
                'title': 'Courses',
                'name': 'course',
                // 'link': '/course',
                'children': [
                    {
                        'title': 'Course Registried',
                        'link': '/course/course-registried',
                    },
                    {
                        'title': 'Course Storage',
                        'link': '/course/course-Storage',
                    },
                ]
            },
            {
                'icon': 'user',
                'title': 'Users',
                'name': 'users',
                // 'link': '/users',
                'children': [
                    {
                        'title': 'Manager',
                        'link': '/users/user-manager',
                    },
                    {
                        'title': 'Student',
                        'link': '/users/user-student',
                    },
                ],
                'hide': false,
            },
            {
                'icon': 'question-circle',
                'title': 'Profiles',
                'link': '/profiles',
                'name': 'profiles',
                'hide': false
            },
            {
                'icon': 'notification',
                'title': 'HUST Page',
                'link': '/hust-page',
                'name': 'HUST Page',
                'hide': false
            },
            {
                'icon': 'file-search',
                'title': 'Logout',
                'link': '/logout',
                'name': 'logout',
                'hide': false
            },
        ]
    }),
    computed: {

    },
    mounted() {

    },
    created() {

    },
    watch: {
        '$route': {
            handler(to) {
                const self = this
                if (to.path == '/logout') {
                    this.$router.push('/login')
                }
                else {
                    self.currentRoute = self.rootCurrentRoute = to.path
                    if (to.meta && to.meta.root) {
                        self.currentRoute = to.meta.root
                    }
                }
                console.log(to)
            },
            immediate: true
        }
    },
    methods: {
        onClickMenu(item: any, event: any) {
            event.preventDefault()
            if (item && item.link !== this.rootCurrentRoute) {
                this.$router.push(item.link)
            }
        },
    }
})
</script>
<style lang="scss"></style>
