import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 此处全局引入global.scss
        additionalData: '@import "./src/styles/glStyle.scss";'
      }
    }
  },
})
