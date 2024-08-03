<!-- Java相关路由页面 -->
<template>
  <el-button :on-click="back" v-show="showBackBtn" style="float: right">返回</el-button>
  <div v-show="javaShow">
    <div class="page-title">
      <h1 style="text-align: center; color: var(--el-color-primary)">Java面试题</h1>
    </div>
    <div class="card-container">
      <el-card v-for="module in modules"
               class="card"
               :onclick="() => cardOnclick(module.router)"
      >
        <div class="title">
          <Document style="width: 1em; height: 1em; margin-right: 8px"/>
          <el-text type="primary" size="large" line-clamp="1">{{ module.title }}</el-text>
        </div>
        <el-text type="info" line-clamp="6">{{ module.desc }}</el-text>
      </el-card>
    </div>
  </div>
  <router-view/>
</template>
<script setup>
import { ref } from "vue";
import { Document } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const javaShow = ref(true);
const showBackBtn = ref(false);

// 卡片点击事件
const cardOnclick = (path) => {
  router.push(path);
  javaShow.value = false;
  showBackBtn.value = true;
}

// 返回父页面方法
const back = () => {
  debugger;
  javaShow.value = true;
  showBackBtn.value = false;
  router.push('/java');
}

const modules = ref([
  {
    title: 'Java基础',
    desc: 'Java 是由Sun Microsystems 公司于1995 年5 月推出的高级程序设计语言。 Java 可运行于多个平台，如Windows, Mac OS 及其他多种UNIX 版本的系统。',
    router: '/java/se'
  }, {
    title: 'Redis',
    desc: 'Redis（Remote Dictionary Server ），即远程字典服务，是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。',
    router: '/java/redis'
  }, {
    title: 'MySQL',
    desc: 'MySQL是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，属于 Oracle 旗下产品。MySQL是最流行的关系型数据库管理系统之一，在 WEB 应用方面，MySQL是最好的RDBMS (Relational Database Management System，关系数据库管理系统)应用软件之一。\n' +
        'MySQL是一种关系型数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。\n' +
        'MySQL所使用的 SQL 语言是用于访问数据库的最常用标准化语言。MySQL 软件采用了双授权政策，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，一般中小型和大型网站的开发都选择 MySQL作为网站数据库。',
    router: '/java/mysql'
  }, {
    title: '框架',
    desc: 'Spring、SpringMVC、SpringBoot、MyBatis等JavaEE相关框架在Java项目中的应用。',
    router: '/java/framework'
  }, {
    title: '微服务',
    desc: '微服务（或称微服务架构）是一种云原生架构方法，在单个应用中包含众多松散耦合且可单独部署的小型组件或服务。 这些服务通常拥有自己的技术栈，包括数据库和数据管理模型；通过一个REST API、事件流和消息代理组合彼此通信；以及按照业务能力进行组织，具有通常称为有界上下文的服务分隔线。 [1]\n' +
        '微服务特点在于代码更容易更新 - 可以直接添加新特性或功能，而不必更新整个应用，团队可以对不同的组件使用不同的技术栈和不同的编程语言。组件可以相互独立地扩展，从而减少与必须扩展整个应用相关的浪费和成本（因为单个功能可能面临过多的负载）。',
    router: '/java/microservice'
  }, {
    title: '消息中间件',
    desc: '消息中间件是基于队列与消息传递技术，在网络环境中为应用系统提供同步或异步、可靠的消息传输的支撑性软件系统。',
    router: '/java/mom'
  }, {
    title: '多线程',
    desc: '多线程（multithreading），是指从软件或者硬件上实现多个线程并发执行的技术。具有多线程能力的计算机因有硬件支持而能够在同一时间执行多于一个线程，进而提升整体处理性能。具有这种能力的系统包括对称多处理机、多核心处理器以及芯片级多处理或同时多线程处理器。在一个程序中，这些独立运行的程序片段叫作“线程”（Thread），利用它编程的概念就叫作“多线程处理”。',
    router: '/java/multithreading'
  }, {
    title: 'JVM',
    desc: '虚拟机是一种抽象化的计算机，通过在实际的计算机上仿真模拟各种计算机功能来实现的。Java虚拟机有自己完善的硬体架构，如处理器、堆栈、寄存器等，还具有相应的指令系统。Java虚拟机屏蔽了与具体操作系统平台相关的信息，使得Java程序只需生成在Java虚拟机上运行的目标代码（字节码），就可以在多种平台上不加修改地运行。',
    router: '/java/jvm'
  }, {
    title: '设计模式',
    desc: '软件设计模式（Design pattern），又称设计模式，是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性、程序的重用性。',
    router: '/java/design_pattern'
  }
]);

</script>
<style lang="scss" scoped>
.page-title {
  margin-bottom: 5%;
}

.card-container {
  display: grid;
  max-width: 100%;
  gap: 25px 25px;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 3fr));
  cursor: pointer;
}

.card {
  width: 100%;
  border-radius: 10px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(13, 110, 253, 0.05);
  transition: transform 0.3s, border 0.3s;
  transform-origin: center center;
  outline: 2px solid transparent;
}

.card .title {
  display: flex;
  margin: 0 auto 8px auto;
  align-items: center;
  text-align: center;
}
</style>