<!-- 首页 -->
<template>
  <div class="title-body">
    <!-- 名称：灵光 -->
    <h1>灵光 <span>IDEASY</span></h1>
    <!-- slogan：捕捉生命中的每一丝灵感，康庄之道，自在其中！ -->
    <div>
      <p style="color: #747bff; font-family: cursive">捕捉生命中的每一丝灵感，康庄之道，自在其中！</p>
    </div>
    <!-- 时钟 -->
    <div style="width: 100%; height: 100%; margin: 0 auto;">
      <Clock color="#283747AF"
             font="sans-serif"
             :fontSize="180"
             :density="4"
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
              :style="{ width: '100%' }"
    />
  </div>

  <!-- 默认显示内容 -->
  <div class="content">
    <item-card v-for="card in cards"
               :key="card.routerName"
               :is-external-link="card.isExternalLink"
               :title="card.title"
               :router-name="card.routerName"
               :url="card.url"
               :page-attr="card.pageAttr"
               :abstract="card.abstract"
               :labels="card.labels"
    ></item-card>
  </div>
</template>

<script lang="js" setup>
import { ref, reactive } from 'vue';
import Clock from '@/components/DynamicClock';
import { Search } from '@element-plus/icons-vue';
import ItemCard from "@/components/ItemCard";
import { cards as ideasyCards } from "@/views/Ideasy/cards.js"
import { cards as mineCards } from "@/views/Mine/cards.js"
import { cards as experienceCards } from "@/views/Experience/cards.js";

// 搜索框关键字
const searchKey = ref('');

const cards = reactive([ ...ideasyCards, ...mineCards, ...experienceCards ]);
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
  font-size: 3vw;
  font-family: 'FZLSJT', serif;
  margin: 40px 0;
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
