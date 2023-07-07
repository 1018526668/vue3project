import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/pages/quillEditor/index.vue')
    },

]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router