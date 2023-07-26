<template>
    <div class="my-home">
        <div class="top-bread">
            <el-breadcrumb separator="/" class="bread-cl">
                <el-breadcrumb-item class="breadcrub-item" :to="{ path: '/' }">首页</el-breadcrumb-item>

                <el-breadcrumb-item v-for="mainItem in breadcrumbMenu" class="breadcrub-item"
                    :to="{ path: mainItem.path }">{{ mainItem.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="bottom-main">
            <RouterView />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed } from "vue";
import { RouterView } from 'vue-router'
import { glPinia } from '@/pinia/index';
let breadcrumbMenu = ref(computed(() => {
    return glPinia().breadcrumbMenu;
}));


</script>
<style scoped lang="scss">
.my-home {
    padding: 20px 30px 0px 30px;
    width: calc(100% - 60px);

    .top-bread {
        width: 100%;

        .bread-cl {
            font-size: $f-bigger;
        }
    }

    .bottom-main {
        width: 100%;
        margin-top: 15px;
    }
}
</style>
  