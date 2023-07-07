import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/home/index.vue')
    },
    {
        path: '/quillEditor',
        name: 'quillEditor',
        menuName: 'quill富文本编辑器',
        component: () => import('@/pages/quillEditor/index.vue')
    },

]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router