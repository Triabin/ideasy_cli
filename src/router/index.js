import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/tool',
    name: 'Tool',
    component: () => import('@/views/Tool'),
    meta: {
      title: '工具',
      desc: '根据平时的一些想法和需求实现的一些小工具'
    },
    children: [
      {
        path: 'water-drop',
        name: 'WaterDrop',
        component: () => import('@/views/Tool/WaterDrop'),
        meta: {
          title: 'css实现水滴效果',
          desc: '水滴圆形由border-radius实现，通过box-shadow对圆形加阴影，这里对圆形的内部和外部添加多个阴影，最大程度上还原水滴效果；外边框通过border-style设置，斜线其实就是一个div边框进行了旋转。',
          labels: ['前端', '水滴', 'CSS'],
          createdAt: '2024-08-17 12:10:42',
          updatedAt: undefined,
          pageAttr: 'tool'
        }
      }
    ]
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('@/views/Game'),
    meta: {
      title: '游戏',
      desc: '学习一些技术的过程中，实现的网页小游戏，主要以学习为主'
    },
    children: [
      {
        path: 'go-bang',
        name: 'GoBang',
        component: () => import('@/views/Game/GoBang'),
        meta: {
          title: '五子棋',
          desc: '实现了一个网页版的五子棋并且详细讲述了其实现原理和核心函数',
          labels: ['JavaScript', 'HTML', 'CSS', '游戏'],
          createdAt: '2024-07-26 23:37:42',
          pageAttr: 'game'
        }
      }
    ]
  },
  {
    path: '/programming',
    name: 'Programming',
    component: () => import('@/views/Programming'),
    meta: {
      title: '编程语言',
      desc: '掌握的每一项编程语言，通过一篇篇的文章，整理成学习路线。'
    },
    children: [
      {
        path: 'c-cpp',
        name: 'CCpp',
        component: () => import('@/views/Programming/CCpp'),
        meta: {
          title: 'C/C++',
          desc: 'C语言和C++的学习资料内容'
        },
        children: []
      },
      {
        path: 'java',
        name: 'Java',
        component: () => import('@/views/Programming/Java'),
        meta: {
          title: 'Java',
          desc: 'Java学习资料'
        },
        children: []
      },
      {
        path: 'python',
        name: 'Python',
        component: () => import('@/views/Programming/Python'),
        meta: {
          title: 'Python',
          desc: 'Python学习资料'
        },
        children: []
      },
      {
        path: 'front',
        name: 'Front',
        component: () => import('@/views/Programming/Front'),
        meta: {
          title: '前端',
          desc: '前端学习资料，分为html，css，JavaScript三个部分'
        },
        children: [
          {
            path: 'html',
            name: 'HTML',
            component: () => import('@/views/Programming/Front/HTML'),
            meta: {
              title: 'HTML',
              desc: 'HTML标签语言学习资料'
            },
            children: []
          },
          {
            path: 'css',
            name: 'CSS',
            component: () => import('@/views/Programming/Front/CSS'),
            meta: {
              title: 'CSS',
              desc: 'css学习资料'
            },
            children: []
          },
          {
            path: 'javascript',
            name: 'JavaScript',
            component: () => import('@/views/Programming/Front/JavaScript'),
            meta: {
              title: 'JavaScript',
              desc: 'JavaScript学习资料'
            },
            children: []
          }
        ]
      },
      {
        path: 'cangjie',
        name: 'Cangjie',
        component: () => import('@/views/Programming/Cangjie'),
        meta: {
          title: '仓颉',
          desc: '仓颉语言学习资料'
        },
        children: [
          {
            path: 'env-build',
            name: 'EnvBuild',
            component: () => import('@/views/Programming/Cangjie/EnvBuild/仓颉开发环境搭建.md'),
            meta: {
              title: '仓颉开发环境搭建',
              desc: '简单介绍仓颉语言，搭建其开发环境，包括代码编辑器、环境变量配置等。',
              labels: ['仓颉', '环境配置'],
              createdAt: '2024-09-10 03:01:58',
              updatedAt: undefined,
              pageAttr: 'blog'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/note',
    name: 'Note',
    component: () => import('@/views/Note'),
    meta: {
      title: '笔记',
      desc: '平时看的一些视频/网页/文章/书籍或是其他任何值得记录的事情的笔记'
    },
    children: [
      {
        path: 'springboot-rabbitmq',
        name: 'SpringBoot2RabbitMQ',
        component: () => import('@/views/Note/Springboot2RabbitMQ/SpringBoot使用RabbitMQ.md'),
        meta: {
          title: 'SpringBoot使用RabbitMQ',
          desc: 'Springboot整合RabbitMQ的流程以及Demo演示',
          labels: ['Java', 'RabbitMQ', 'SpringBoot'],
          createdAt: '2024-08-30 18:47:36',
          updatedAt: undefined,
          pageAttr: 'note'
        }
      },
      {
        path: 'linux-commands',
        name: 'LinuxCommands',
        component: () => import('@/views/Note/LinuxCommands/Linux常用命令.md'),
        meta: {
          title: 'Linux常用命令',
          desc: '记录了一些常用的Linux命令，方便查阅',
          labels: ['Linux', 'shell', 'command'],
          createdAt: '2024-08-16 16:42:33',
          updatedAt: undefined,
          pageAttr: 'note'
        }
      },
      {
        path: 'qr-sqrt',
        name: 'QRSqrt',
        component: () => import('@/views/Note/QRSqrt/平方根倒数算法.md'),
        meta: {
          title: '平方根倒数算法',
          desc: '平方根倒数快速算法，顾名思义就是求出一个平方根的倒数，因为这种算法速度很快，所以叫做快速算法。这个算法是由格雷格·沃什（Greg Walsh）搞出来的，80年代的沃什在一家叫做Ardent的公司工作，Ardent的主营业务是给超算中心制造工作站，但是Ardent的小型机性能比较捉急，沃什的工作就是给这些性能堪忧的硬件优化3D程序，而计算平方根倒数是3D程序的基础，沃什只好从底层开始下手。',
          labels: ['算法', '平方根倒数', '3D'],
          createdAt: '2024-08-14 20:21:53',
          updatedAt: undefined,
          pageAttr: 'note'
        }
      },
      {
        path: 'java-functional',
        name: 'JavaFunctional',
        component: () => import('@/views/Note/JavaFunctional/Java四大函数式编程接口.md'),
        meta: {
          title: 'Java四大函数式编程接口',
          desc: 'Java中的函数式接口：在Java中，函数式接口是一种特殊的接口，它只定义了一个抽象方法，Java函数式接口主要是为了配合Lambda表达式和方法引用而在jdk1.8引入的，它使得在Java中实现函数式编程风格成为可能。',
          labels: ['Java', '函数式', 'Functional'],
          createdAt: '2024-08-12 17:42:37',
          updatedAt: undefined,
          pageAttr: 'note'
        }
      },
      {
        path: 'java-reference',
        name: 'JavaReference',
        component: () => import('@/views/Note/JavaReference/Java四大引用-强软弱虚.md'),
        meta: {
          title: 'Java四大引用-强软弱虚',
          desc: '在jdk1.2之前的版本中，如果一个对象不被任何变量引用，那么程序就无法再使用这个对象，也就是说，只有对象处于可达状态（`reachable`）时，程序才能使用它。\n' +
            '从jdk1.2版本开始，对象引用就被划分为4种级别，从而使陈旭能更加灵活地控制**对象的生命周期**。这4中级别由高到低依次分为：强引用、软引用、弱引用、虚引用。',
          labels: ['Java', '引用', '原理'],
          createdAt: '2024-08-12 15:25:13',
          updatedAt: undefined,
          pageAttr: 'note'
        }
      },
      {
        path: 'cookie-session-token',
        name: 'CookieSessionToken',
        component: () => import('@/views/Note/CookieSessionToken/Cookie、Session、Token区别.md'),
        meta: {
          title: 'Cookie、Session、Token区别',
          desc: '本质上不是同一种东西，但是都与维持状态信息有关，例如维持登录状态，使用它们都能做。',
          labels: ['Cookie', 'Session', 'Token', '安全'],
          createdAt: '2024-08-09 12:39:50',
          updatedAt: undefined,
          pageAttr: 'note'
        }
      },
      {
        path: 'interv-javase',
        name: 'IntervJavase',
        component: () => import('@/views/Note/IntervJavase/Java基础.md'),
        meta: {
          title: '面试：Java基础',
          desc: '基础概念、集合框架、泛型与类型擦除、并发与多线程、JVM与性能优化、设计模式、数据库与JDBC、框架与库、SpringMVC的理解',
          labels: ['Java', '面试'],
          createdAt: '2024-08-03 16:02:03',
          updatedAt: undefined,
          pageAttr: 'note'
        }
      },
      {
        path: 'java-proxy',
        name: 'JavaProxy',
        component: () => import('@/views/Note/JavaProxy/Java代理模式.md'),
        meta: {
          title: 'Java代理模式',
          desc: '代理模式是一种比较好理解的设计模式。简单来说就是 我们使用代理对象来代替对真实对象(real object)的访问，这样就可以在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。代理模式的主要作用是扩展目标对象的功能，比如说在目标对象的某个方法执行前后你可以增加一些自定义的操作。',
          labels: ['Java', '代理', '后端'],
          createdAt: '2024-08-11 21:54:55',
          updatedAt: undefined,
          pageAttr: 'note'
        }
      },
      {
        path:'springboot-log4j2',
        name: 'SpringBootToLog4j2',
        component: () => import('@/views/Note/SpringBootToLog4j2/SpringBoot接入Log4j2.md'),
        meta: {
          title: 'SpringBoot接入Log4j2',
          desc: 'Log4j是Apache的一个开源项目，通过使用Log4j，我们可以控制日志信息输送的目的地是控制台、文件、GUI组件，甚至是套接口服务器、NT的事件记录器、UNIX Syslog守护进程等；我们也可以控制每一条日志的输出格式；通过定义每一条日志信息的级别，我们能够更加细致地控制日志的生成过程。最令人感兴趣的就是，这些可以通过一个配置文件来灵活地进行配置，而不需要修改应用的代码。',
          labels: ['Java', 'SpringBoot', 'Log4j2'],
          createdAt: '2024-08-04 15:38:46',
          updatedAt: undefined,
          pageAttr: 'note'
        }
      },
      {
        path: 'front-experience',
        name: 'FrontExperience',
        component: () => import('@/views/Note/FrontExperience/前端经典问题.md'),
        meta: {
          title: '前端经典问题',
          desc: '常见经典的前端问题解决方案',
          labels: ['前端', 'JavaScript', 'vue', 'html', 'css', 'TypeScript'],
          createdAt: '2024-08-07 11:44:41',
          updatedAt: '2024-08-30 13:59:30',
          pageAttr: 'note'
        }
      },
      {
        path:'regex-java',
        name: 'RegexForJava',
        component: () => import('@/views/Note/RegexForJava/正则表达式（Java）.md'),
        meta: {
          title: '正则表达式（Java）',
          desc: '正则表达式：regular expression => regex/RegExp/regExp，是对字符串执行模式匹配的技术',
          labels: ['Regex', '正则表达式', 'Java'],
          createdAt: '2024-08-07 11:43:56',
          updatedAt: undefined,
          pageAttr: 'note'
        }
      }
    ]
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog'),
    meta: {
      title: '博客',
      desc: '我自己的技术输出'
    },
    children: [
      {
        path: 'intellij-idea-ist-time',
        name: 'IntellijIdeaIstTime',
        component: () => import("@/views/Blog/IntelliJIDEAIstTime/IntelliJ_IDEA插入时间文本.md"),
        meta: {
          title: 'IntelliJ_IDEA插入时间文本',
          desc: '需求：在使用IDEA编辑一些文本时，需要插入指定格式的当前时间文本，首先想到的是找找有没有相关的IDEA插件，看到确实有别的猿做过相关的插件，但当时找到的文章是需要下载博主提供的离线插件jar包，而且时间格式是否能灵活自定义还未知，且当时刚好灵光一现，有了别的方法，一个不需要安装插件，而且更加灵活自由的方法，所以没有往下细看。',
          labels: ['IDEA', '时间格式化'],
          createdAt: '2024-08-09 12:50:26',
          updatedAt: undefined,
          pageAttr: 'blog'
        }
      },
      {
        path: 'dynamic-clock',
        name: 'DynamicClock',
        component: () => import('@/views/Blog/DynamicClock/粒子时钟实现.md'),
        meta: {
          title: '粒子时钟实现',
          desc: '网页刷新后，首先生成一定数量的粒子，随机分布在一个环形上；粒子迅速按照当前时间的数字为轨迹移动到指定位置上排列；粒子的排布随着时间的变化而变化。',
          labels: ['前端', 'JavaScript', 'vue', 'html', 'css'],
          createdAt: '2024-08-07 15:58:27',
          updatedAt: undefined,
          pageAttr: 'blog'
        }
      },
      {
        path: 'js-date-str-convert',
        name: 'JsDateStrConvert',
        component: () => import('@/views/Blog/JsDateStrConvert/JS时间对象与String相互转换.md'),
        meta: {
          title: 'JS时间对象与String相互转换',
          desc: '主要描述了在JavaScript中Date对象按照指定格式格式化成时间字符串的方法以及根据时间字符串将其转换成Date对象的方法以及如何在项目中使用。',
          labels: ['前端', 'JavaScript', '格式化', 'Date'],
          createdAt: '2024-08-07 19:17:26',
          updatedAt: undefined,
          pageAttr: 'blog'
        }
      },
      {
        path: 'dynamic-audio',
        name: 'DynamicAudio',
        component: () => import('@/views/Blog/DynamicAudio'),
        meta: {
          title: '声音动效实现原理',
          desc: '展示并且详细描述如何通过AudioAPI和前端技术实现声音动态效',
          labels: ['声音', '前端', '音效'],
          createdAt: '2024-08-21 13:39:31',
          updatedAt: undefined,
          pageAttr: 'blog'
        }
      }
    ]
  },
  {
    path: '/reco-pages',
    name: 'RecoPages',
    component: () => import('@/views/RecoPages'),
    meta: {
      title: '收藏网页',
      desc: '我看完后觉得值得推荐的网站或者网页文章'
    }
  }
];

// 制定路由规则
const router = createRouter({
  history: createWebHashHistory(), // 设置路由模式
  routes: routes,
  // 配置每次打开页面都在顶端
  scrollBehavior() {
    return { left: 0, top: 0 };
  }
});

export default router;
