import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需引用element-plus内容配置
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // })
  ],
  resolve: {
    // 添加别名
    alias: [
      {
        find: '@',
        replacement: '/src'
      }
    ]
  },

  server: {
    host: '127.0.0.1',
    port: 3000,
    https: false,
    // 设置反向代理，解决跨域
    proxy: {
      '/api': {
        // 后端地址
        target: 'http://127.0.0.1:3001/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
