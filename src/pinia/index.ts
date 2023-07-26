import { createPinia, defineStore } from "pinia"
export const store = createPinia()
interface glPinia {
    breadcrumbMenu: any
}

export const glPinia = defineStore("glPinia", {		//全局的缓存
    state: (): glPinia => ({
        breadcrumbMenu: [],
    }),

    actions: {
        setBreadcrumbMenu(data: any) {
            this.breadcrumbMenu = data;
        }
    },
})