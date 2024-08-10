<!-- 我的普通笔记、博客（非灵感）等 -->
<template>
  <div class="area-table" v-if="router.currentRoute.value.path === '/mine'">
    <item-card v-for="card in cardList"
               :key="card.routerName"
               :is-external-link="card.isExternalLink"
               :title="card.title"
               :page-attr="card.pageAttr"
               :router-name="card.routerName"
               :url="card.url"
               :abstract="card.abstract"
               :labels="card.labels"
               :update-at="card.updatedAt"
    ></item-card>
  </div>
  <router-view></router-view>
</template>
<script setup>
import { reactive } from "vue";
import ItemCard from "@/components/ItemCard";
import { cards } from "./cards.js";
import { useRouter } from "vue-router";
import { TimeUtils } from "@/common/utils.js";

const cardList = reactive(cards.toSorted((e1, e2) => {
  let date1 = TimeUtils.convert(e1.updatedAt, TimeUtils.format1);
  let date2 = TimeUtils.convert(e2.updatedAt, TimeUtils.format1);
  return date2 - date1;
}));
const router = useRouter();
</script>
<style lang="scss" scoped>
.area-header {
  height: 60px;
  display: flex;
}

.area-table {
  margin: 30px auto 0;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 3fr));
  gap: 25px 30px;
}
</style>
