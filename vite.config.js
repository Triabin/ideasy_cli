import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    // 添加别名
    alias: [
      {
        find: '@',
        replacement: '/src'
      }, {
        find: '@assets',
        replacement: '/src/assets'
      }
    ],
    extensions: ['.vue', '.js'],
  },

  server: {
    host: '192.168.2.101',
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
