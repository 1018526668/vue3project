<template>
    <div class="full-page">
        <div id="editor"></div>

        <div id="toolbar"></div>
    </div>
</template>
  
<script setup lang="ts">
import Quill from 'quill';

var options = {
    debug: 'info',
    modules: {
        toolbar: '#toolbar'
    },
    placeholder: 'Compose an epic...',
    readOnly: true,
    theme: 'snow'
};
var editor = new Quill('#editor', options);
</script>
<style scoped lang="scss"></style>
  