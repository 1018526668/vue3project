<template>
    <div class="full-page all-menu">
        <div class="item-one" v-for="item in allMenu" @click="jumpPage(item)">{{ item.name }}</div>
    </div>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from "vue"
import { glPinia } from '@/pinia/index';
const Router  = useRouter();
const glPiniaStore = glPinia();
let allMenu: any = ref([]);
initMenus();

function initMenus() {
    let _route = Router.options.routes;
    let menus = _route.map((item: any) => {
        if (item.meta?.menuName) {
            return {
                name: item.meta?.menuName,
                path: item.path,
            }
        }
    });
    menus = menus.filter((item: any) => item);
    allMenu.value = menus;
}

function jumpPage(item: any) {
    glPiniaStore.setBreadcrumbMenu([item]);
    Router.push(item.path);
}

</script>
<style scoped lang="scss">
.all-menu {
    display: flex;

    .item-one {
        padding: 8px 20px;
        background: #fff;
        border-radius: 5px;
        margin-top: 15px;
        box-shadow: 0 5px 5px lightblue;
        cursor: pointer;
    }
}
</style>
  