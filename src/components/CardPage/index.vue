<!-- 卡片页面 -->
<template>
  <div class="card-page"
       v-if="router.currentRoute.value.path === '/' || router.currentRoute.value.path === props.fullPath">
    <slot name="default"></slot>
    <div class="area-table">
      <item-card v-for="(card, index) in cardList"
                 :key="index"
                 :is-external-link="card.isExternalLink"
                 :title="card.title"
                 :page-attr="card.pageAttr"
                 :desc="card.desc"
                 :router-name="card.routerName"
                 :url="card.url"
                 :labels="card.labels"
                 :updated-at="card.updatedAt"
      ></item-card>
    </div>
  </div>
  <!-- 子路由 -->
  <router-view></router-view>
</template>
<script setup>
import { useRouter } from "vue-router";
import { TimeUtils } from "@/common/utils.js";
import { reactive } from "vue";
import ItemCard from "@/components/ItemCard/index.vue";

const props = defineProps({
  cards: {
    type: Array,
    required: true,
    default: []
  },

  // 路由完整路径
  fullPath: {
    type: String,
    required: true
  }
});
const router = useRouter();
const cardList = reactive(props.cards.toSorted((e1, e2) => {
  let date1 = TimeUtils.convert(e1.updatedAt, TimeUtils.format1);
  let date2 = TimeUtils.convert(e2.updatedAt, TimeUtils.format1);
  return date2 - date1;
}));
</script>
<style lang="scss" scoped>
.area-table {
  margin: 30px auto 0;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 3fr));
  gap: 25px 30px;
}

.card {
  border-radius: 10px;
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(13, 110, 253, 0.05);
  transition: transform 0.3s, border 0.3s;
  transform-origin: center center;
  outline: 2px solid transparent;
  cursor: pointer;
  position: relative;
}

.card .title {
  display: flex;
  margin: 0 auto 8px auto;
  align-items: center;
  text-align: center;
}

.card .footer {
  position: absolute;
  bottom: 10px;
  width: 100%;
  border-top: var(--el-menu-border-color) dashed 1px;
}
</style>
