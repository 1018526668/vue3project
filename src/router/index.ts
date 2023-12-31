import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'allMenu',
        component: () => import('@/pages/allMenu/index.vue')
    },

    {
        path: '/tiptap',
        name: 'tiptap',
        meta: {
            menuName: 'tiptap插件',
        },
        component: () => import('@/pages/tiptap/index.vue')
    },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router