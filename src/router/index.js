import { createRouter, createWebHashHistory } from 'vue-router';

// 制定路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }, {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/Mine.vue')
  }
];

const routers = createRouter({
  history: createWebHashHistory(), // 设置路由模式
  routes
});

export default routers;