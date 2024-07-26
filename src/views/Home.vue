<!-- 首页 -->
<template>
  <div class="title-body">
    <!-- 名称：灵光 -->
    <h1>灵光 <span>IDEASY</span></h1>
    <!-- slogan：捕捉生命中的每一丝灵感，康庄之道，自在其中！ -->
    <p style="color: #747bff; font-family: cursive">捕捉生命中的每一丝灵感，康庄之道，自在其中！</p>
    <!-- 时钟 -->
    <div style="width: 35vw; margin: 0 auto;">
      <Clock color="#283747AF"
             font="sans-serif"
             :fontSize="320"
             :density="6"
      />
    </div>
  </div>

  <!-- 搜索框 -->
  <div class="search-box">
    <el-input v-model="searchKey"
              type="text"
              style="width: 50vw; height: 50px"
              placeholder="你找啥？"
              :prefix-icon="Search"
    />
  </div>

  <!-- 默认显示内容 -->
  <div class="content">
    <content-card v-for="card in cards"
                  :key="card.title"
                  :card-type="card.cardType"
                  :title="card.title"
                  :description="card.description"
                  :href="card.href"
                  :icon="card.icon"
    />
  </div>
</template>

<script lang="js" setup>
import {ref, reactive} from 'vue';
import Clock from '@/components/DynamicClock.vue';
import {Search} from '@element-plus/icons-vue';
import ContentCard from "@/components/ContentCard.vue";

// 搜索框关键字
const searchKey = ref('');

const cards = reactive([
  {
    cardType: 'article',
    title: '粒子时钟实现方案',
    href: '/mine',
    description: '网页刷新后，首先生成一定数量的粒子，随机分布在一个环形上\n' +
        '粒子迅速按照当前时间的数字为轨迹移动到指定位置上排列\n' +
        '粒子的排布随着时间的变化而变化'
  }, {
    cardType: 'article',
    title: '中文Demo2',
    href: 'www.baidu.com',
    description: '测试样例'
  }, {
    cardType: 'article',
    title: '中文Demo3',
    href: 'www.baidu.com',
    description: '测试样例'
  }, {
    cardType: 'tool',
    title: '中文Demo4',
    href: 'www.baidu.com',
    description: '测试样例'
  }, {
    cardType: 'article',
    title: '中文Demo5',
    href: 'www.baidu.com',
    description: '测试样例'
  }, {
    cardType: 'tool',
    title: '中文Demo6',
    href: 'www.baidu.com',
    description: '测试样例'
  }, {
    cardType: 'tool',
    title: '中文Demo6',
    href: 'www.baidu.com',
    description: '测试样例'
  }, {
    cardType: 'tool',
    title: '中文Demo6',
    href: 'www.baidu.com',
    description: '测试样例'
  }, {
    cardType: 'tool',
    title: '中文Demo6',
    href: 'www.baidu.com',
    description: '测试样例'
  }, {
    cardType: 'tool',
    title: '中文Demo6',
    href: 'www.baidu.com',
    description: '测试样例'
  }, {
    cardType: 'tool',
    title: '中文Demo6',
    href: 'www.baidu.com',
    description: '测试样例'
  }, {
    cardType: 'tool',
    title: '中文Demo6',
    href: 'www.baidu.com',
    description: '测试样例'
  }, {
    cardType: 'tool',
    title: '中文Demo6',
    href: 'www.baidu.com',
    description: '测试样例'
  }, {
    cardType: 'tool',
    title: '中文Demo6',
    href: 'www.baidu.com',
    description: '测试样例'
  },
]);
</script>

<style scoped>
.title-body {
  width: 100%;
  display: block;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0 0 0;
  background: radial-gradient(#FFF, #0D6EFD19);
}

.title-body h1 {
  text-align: center;
  font-size: 2vw;
  font-family: '方正隶书简体',serif;
}

.title-body h1 span {
  color: #0D6EFDCB;
  font-weight: bold;
  font-family: monospace, serif;
}

.title-body p {
  width: 100%;
  display: block;
  text-align: center;
}

.search-box {
  margin: 30px auto 0;
  text-align: center;
}

.content {
  margin: 30px auto 0;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 3fr));
  gap: 25px 30px;
}

</style>