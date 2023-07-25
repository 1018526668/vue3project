<template>
    <div class="full-page all-menu">
        <div class="item-one">1111</div>
    </div>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router'

initMenus();

function initMenus() {
    const router = useRouter();
    console.log('router',router);
}

</script>
<style scoped lang="scss">
.all-menu {
    display: flex;
    .item-one {
        padding: 6px 15px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 5px 5px lightblue; 
    }
}
</style>
  