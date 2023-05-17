import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue'),
        },
        {
            path: '/signup',
            name: 'sign-up',
            component: () => import('@/views/Signup.vue'),
        },
        {
            path: '/',
            component: () => import('@/views/Layout.vue'),
            redirect: { path: "/dashboard" },
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/dashboard/Dashboard.vue'),
                    meta: {
                        required: true,
                        collapsed: true,
                        title: 'Dashboard',
                    }
                },
                {
                    path: '/course',
                    name: 'course',
                    component: () => import('@/views/course/Courses.vue'),
                    meta: {
                        required: true,
                        collapsed: true,
                        title: 'Courses',
                    },
                    children: [
                        {
                            path: 'course-registried',
                            name: 'course-registried',
                            component: () => import('@/views/course/CourseRegistried.vue'),
                            meta: {
                                required: true,
                                collapsed: true,
                                title: 'Course Registried',
                            }
                        },
                        {
                            path: 'course-Storage',
                            name: 'course-Storage',
                            component: () => import('@/views/course/CourseStorage.vue'),
                            meta: {
                                required: true,
                                collapsed: true,
                                title: 'Course Storage',
                            }
                        },
                    ]
                },
                // {
                //     path: '/course/course-registried',
                //     name: 'course-registried',
                //     component: () => import('@/views/course/CourseRegistried.vue'),
                //     meta: {
                //         required: true,
                //         collapsed: true,
                //         title: 'Course Registried',
                //     }
                // },
                {
                    path: '/users',
                    name: 'users',
                    component: () => import('@/views/users/Users.vue'),
                    meta: {
                        required: true,
                        collapsed: true,
                        title: 'Users',
                    },
                    children: [
                        {
                            path: 'user-manager',
                            name: 'Manager',
                            component: () => import('@/views/users/Manager.vue'),
                            meta: {
                                disabled: false,
                                title: 'Manager'
                            }
                        },
                        {
                            path: 'user-student',
                            name: 'Student',
                            component: () => import('@/views/users/Student.vue'),
                            meta: {
                                disabled: false,
                                title: 'Student'
                            }
                        },
                    ]
                },
                // {
                //     path: '/users/user-manager',
                //     name: 'Manager',
                //     component: () => import('@/views/users/Manager.vue'),
                //     meta: {
                //         disabled: false,
                //         title: 'Manager'
                //     }
                // },
                // {
                //     path: '/users/user-student',
                //     name: 'Student',
                //     component: () => import('@/views/users/Student.vue'),
                //     meta: {
                //         disabled: false,
                //         title: 'Student'
                //     }
                // },
                {
                    path: '/profiles',
                    name: 'profiles',
                    component: () => import('@/views/profiles/Profiles.vue'),
                    meta: {
                        required: true,
                        collapsed: true,
                        title: 'Profiles'
                    }
                },
                {
                    path: '/hust-page',
                    name: 'HUST Page',
                    component: () => import('@/views/hustPage/HustPage.vue'),
                    meta: {
                        required: true,
                        collapsed: true,
                        title: 'Hust Page'
                    }
                },
                {
                    path: '/403',
                    name: '403',
                    component: () => import('@/views/exception/403.vue'),
                },
                {
                    path: '/500',
                    name: '500',
                    component: () => import('@/views/exception/500.vue'),
                },
                {
                    path: '*',
                    name: '404',
                    component: () => import('@/views/exception/404.vue'),
                }
            ]
        }
    ]
})


export default routers
