import { createRouter, createWebHashHistory } from 'vue-router';

// 制定路由规则
const router = createRouter({
  history: createWebHashHistory(), // 设置路由模式
  routes: [
    {
      path: '/home',
      name: 'Home',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/Home')
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/ideasy',
      name: 'Ideasy',
      meta : {
        title: '灵光'
      },
      component: () => import('@/views/Ideasy'),
      children: [
        {
          path: 'dynamic-clock',
          name: 'DynamicClock',
          meta: {
            title: "粒子时钟实现方案"
          },
          component: () => import('@/views/Ideasy/DynamicClock/粒子时钟实现.md')
        },
        {
          path: 'gobang',
          name: 'GoBang',
          meta: {
            title: '五子棋'
          },
          component: () => import('@/views/Ideasy/GoBang')
        }
      ]
    },
    {
      path: '/experience',
      name: 'Experience',
      meta: {
        title: '前人'
      },
      component: () => import('@/views/Experience')
    },
    {
      path: '/mine',
      name: 'Mine',
      meta: {
        title: '我的'
      },
      component: () => import('@/views/Mine'),
      children: [
        {
          path: 'interv-javase',
          name: 'IntervJavase',
          meta: {
            title: '面试：Java基础'
          },
          component: () => import('@/views/Mine/IntervJavase/Java基础.md')
        },
        {
          path: 'springboot-log4j2',
          name: 'SpringBootToLog4j2',
          meta: {
            title: 'SpringBoot接入Log4j2'
          },
          component: () => import('@/views/Mine/SpringBootToLog4j2/SpringBoot接入Log4j2.md')
        },
        {
          path: 'front-experience',
          name: 'FrontExperience',
          meta: {
            title: '前端经典问题'
          },
          component: () => import('@/views/Mine/FrontExperience/前端经典问题.md')
        },
        {
          path: 'regex-java',
          name: 'RegexForJava',
          meta: {
            title: '正则表达式（Java）'
          },
          component: () => import('@/views/Mine/RegexForJava/正则表达式（Java）.md')
        }
      ]
    },
    {
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
