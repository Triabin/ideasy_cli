import { createRouter, createWebHashHistory } from 'vue-router';

// 制定路由规则
const router = createRouter({
  history: createWebHashHistory(), // 设置路由模式
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/Home.vue')
    }, {
      path: '/mine',
      name: 'Mine',
      meta: {
        title: '我的'
      },
      component: () => import('@/views/Mine.vue')
    }, {
      path: '/java',
      name: 'Java',
      meta: {
        title: 'Java'
      },
      component: () => import('@/views/Java'),
      children: [
        {
          path: 'se',
          name: 'JavaSE',
          meta: { title: 'Java基础' },
          component: () => import('@/views/Java/SE')
        }, {
          path: 'redis',
          name: 'Redis',
          meta: { title: 'Redis' },
          component: () => import('@/views/Java/Redis')
        }, {
          path: 'mysql',
          name: 'MySQL',
          meta: { title: 'MySQL' },
          component: () => import('@/views/Java/MySQL')
        }, {
          path: 'framework',
          name: 'Framework',
          meta: { title: '框架' },
          component: () => import('@/views/Java/Framework')
        }, {
          path: 'microservice',
          name: 'Microservice',
          meta: { title: '微服务' },
          component: () => import('@/views/Java/Microservice')
        }, {
          path: 'mom',
          name: 'MOM',
          meta: { title: '消息中间件' },
          component: () => import('@/views/Java/MOM')
        }
      ]
    }
  ]
});

export default router;