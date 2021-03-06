import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'menu',
        component: () => import('../views/Menu.vue')
    },
    {
        path: '/select',
        name: 'select',
        component: () => import( /* webpackChunkName: "about" */ '../views/SelectRoom.vue')
    },
    {
        path: "/spider",
        name: "spider",
        component: () => import('../views/Spider.vue')
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

