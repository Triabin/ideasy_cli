import { ItemCardEle } from "@/common/classes.js";

export const cards = [
  new ItemCardEle(
    false,
    'Java四大函数式编程接口',
    'article',
    'Java中的函数式接口：在Java中，函数式接口是一种特殊的接口，它只定义了一个抽象方法，Java函数式接口主要是为了配合Lambda表达式和方法引用而在jdk1.8引入的，它使得在Java中实现函数式编程风格成为可能。',
    'JavaFunctional',
    '/mine/java-functional',
    ['Java', '函数式', 'Functional'],
    '2024-08-12 17:42:37',
    undefined
  ),
  new ItemCardEle(
    false,
    'Java四大引用-强软弱虚',
    'article',
    '在jdk1.2之前的版本中，如果一个对象不被任何变量引用，那么程序就无法再使用这个对象，也就是说，只有对象处于可达状态（`reachable`）时，程序才能使用它。\n' +
    '从jdk1.2版本开始，对象引用就被划分为4种级别，从而使陈旭能更加灵活地控制**对象的生命周期**。这4中级别由高到低依次分为：强引用、软引用、弱引用、虚引用。',
    'JavaReference',
    '/mine/java-reference',
    ['Java', '引用', '原理'],
    '2024-08-12 15:25:13',
    undefined
  ),
  new ItemCardEle(
    false,
    'Java代理模式',
    'article',
    '代理模式是一种比较好理解的设计模式。简单来说就是 我们使用代理对象来代替对真实对象(real object)的访问，这样就可以在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。代理模式的主要作用是扩展目标对象的功能，比如说在目标对象的某个方法执行前后你可以增加一些自定义的操作。',
    'JavaProxy',
    '/mine/java-proxy',
    ['Java', '代理', '后端'],
    '2024-08-11 21:54:55',
    undefined
  ),
  new ItemCardEle(
    false,
    'Cookie、Session、Token区别',
    'article',
    '本质上不是同一种东西，但是都与维持状态信息有关，例如维持登录状态，使用它们都能做。',
    'CookieSessionToken',
    '/mine/cookie-session-token',
    ['Cookie', 'Session', 'Token', '安全'],
    '2024-08-09 12:39:50',
    undefined
  ),
  new ItemCardEle(
    false,
    '面试：Java基础',
    'article',
    '基础概念、集合框架、泛型与类型擦除、并发与多线程、JVM与性能优化、设计模式、数据库与JDBC、框架与库、SpringMVC的理解',
    'IntervJavase',
    '/mine/interv-javase',
    ['Java', '面试'],
    '2024-08-03 16:02:03',
    undefined
  ),
  new ItemCardEle(
    false,
    'SpringBoot接入Log4j2',
    'article',
    'Log4j是Apache的一个开源项目，通过使用Log4j，我们可以控制日志信息输送的目的地是控制台、文件、GUI组件，甚至是套接口服务器、NT的事件记录器、UNIX Syslog守护进程等；我们也可以控制每一条日志的输出格式；通过定义每一条日志信息的级别，我们能够更加细致地控制日志的生成过程。最令人感兴趣的就是，这些可以通过一个配置文件来灵活地进行配置，而不需要修改应用的代码。',
    'SpringBootToLog4j2',
    '/mine/springboot-log4j2',
    ['Java', 'SpringBoot', 'Log4j2'],
    '2024-08-04 15:38:46',
    undefined
  ),
  new ItemCardEle(
    false,
    '前端经典问题',
    'article',
    '常见经典的前端问题解决方案',
    'FrontExperience',
    '/mine/front-experience',
    ['前端', 'JavaScript', 'vue', 'html', 'css', 'TypeScript'],
    '2024-08-07 11:44:41',
    undefined
  ),
  new ItemCardEle(
    false,
    '正则表达式（Java）',
    'article',
    '正则表达式：regular expression => regex/RegExp/regExp，是对字符串执行模式匹配的技术',
    'RegexForJava',
    '/mine/regex-java',
    ['Regex', '正则表达式', 'Java'],
    '2024-08-07 11:43:56',
    undefined
  )
]
