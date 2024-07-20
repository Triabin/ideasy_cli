import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import components from '@/components/index.js';

const app = createApp(App);
app.use(router) // 配置路由
  .use(ElementPlus) // 配置element-plus
  .use(components) // 注册全局组件
  .mount('#app');

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}