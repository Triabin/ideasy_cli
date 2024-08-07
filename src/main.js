import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import components from '@/components/index.js';
import CustomFunc from "@/plugins/custom-func.js";
import 'element-plus/dist/index.css';
import '@/api/mock.js';
import '@/common/style.css';
import '@/assets/font/font.css';
import "vite-plugin-vitepress/dist/theme.mjs";

const app = createApp(App);
app.use(router) // 配置路由
  .use(ElementPlus) // 配置element-plus
  .use(CustomFunc) // 注册自定义各个js对象的函数
  .use(components) // 注册全局组件
  .mount('#app');

// 注册所有element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
