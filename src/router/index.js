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
          path: 'intellij-idea-ist-time',
          name: 'IntellijIdeaIstTime',
          meta: {
            title: 'IntelliJ IDEA插入时间文本'
          },
          component: () => import('@/views/Ideasy/IntelliJIDEAIstTime/IntelliJ_IDEA插入时间文本.md')
        },
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
        },
        {
          path: 'js-date-str-convert',
          name: 'JsDateStrConvert',
          meta: {
            title: 'JS时间对象与String相互转换'
          },
          component: () => import('@/views/Ideasy/JsDateStrConvert/JS时间对象与String相互转换.md')
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
          path: 'qr-sqrt',
          name: 'QRSqrt',
          meta: {
            title: '平方根倒数算法'
          },
          component: () => import('@/views/Mine/QRSqrt/平方根倒数算法.md')
        },
        {
          path: 'java-functional',
          name: 'JavaFunctional',
          meta: {
            title: 'Java四大函数式编程接口'
          },
          component: () => import('@/views/Mine/JavaFunctional/Java四大函数式编程接口.md')
        },
        {
          path: 'java-reference',
          name: 'JavaReference',
          meta: {
            title: 'Java四大引用-强软弱虚'
          },
          component: () => import('@/views/Mine/JavaReference/Java四大引用-强软弱虚.md')
        },
        {
          path: 'java-proxy',
          name: 'JavaProxy',
          meta: {
            title: 'Java代理模式'
          },
          component: () => import('@/views/Mine/JavaProxy/Java代理模式.md')
        },
        {
          path: 'cookie-session-token',
          name: 'CookieSessionToken',
          meta: {
            title: 'Cookie、Session、Token区别'
          },
          component: () => import('@/views/Mine/CookieSessionToken/Cookie、Session、Token区别.md')
        },
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
    }
  ]
});

export default router;
