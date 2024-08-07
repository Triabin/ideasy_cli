import { ItemCardEle } from "@/common/classes.js";

export const cards = [
  new ItemCardEle(
    false,
    '面试：Java基础',
    'article',
    '基础概念、集合框架、泛型与类型擦除、并发与多线程、JVM与性能优化、设计模式、数据库与JDBC、框架与库、SpringMVC的理解',
    'IntervJavase',
    '/mine/interv-javase',
    ['Java', '面试']
  ),
  new ItemCardEle(
    false,
    'SpringBoot接入Log4j2',
    'article',
    'Log4j是Apache的一个开源项目，通过使用Log4j，我们可以控制日志信息输送的目的地是控制台、文件、GUI组件，甚至是套接口服务器、NT的事件记录器、UNIX Syslog守护进程等；我们也可以控制每一条日志的输出格式；通过定义每一条日志信息的级别，我们能够更加细致地控制日志的生成过程。最令人感兴趣的就是，这些可以通过一个配置文件来灵活地进行配置，而不需要修改应用的代码。',
    'SpringBootToLog4j2',
    '/mine/springboot-log4j2',
    ['Java', 'SpringBoot', 'Log4j2']
  ),
  new ItemCardEle(
    false,
    '前端经典问题',
    'article',
    '常见经典的前端问题解决方案',
    'FrontExperience',
    '/mine/front-experience',
    ['前端', 'JavaScript', 'vue', 'html', 'css', 'TypeScript']
  ),
  new ItemCardEle(
    false,
    '正则表达式（Java）',
    'article',
    '正则表达式：regular expression => regex/RegExp/regExp，是对字符串执行模式匹配的技术',
    'RegexForJava',
    '/mine/regex-java',
    ['Regex', '正则表达式', 'Java']
  )
]
