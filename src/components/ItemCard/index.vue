<!-- 页面卡片组件 -->
<template>
  <el-card class="card" @click="cardClick">
    <div class="title">
      <Document v-if="props.pageAttr === 'article'" style="width: 1em; height: 1em; margin-right: 8px"/>
      <Tools v-if="props.pageAttr === 'tool'" style="width: 1em; height: 1em; margin-right: 8px"/>
      <el-text type="primary" size="large" line-clamp="1">{{ props.title }}</el-text>
    </div>
    <div class="flex gap-2 mt-4"
         v-if="props.labels && props.labels.length > 0"
         style="white-space:nowrap; overflow: hidden; text-align: left"
         :title="`标签：${props.labels.join(' | ')}`"
    >
      <el-tag v-for="item in props.labels"
              :key="item"
              :type="ElePlusUtils.turnTypes()"
              effect="light"
              style="margin-right: 5px"
      >
        {{ item }}
      </el-tag>
    </div>
    <div style="text-align: left;" :title="props.abstract">
      <el-text type="info"
               line-clamp="3"
               style="white-space: pre-wrap; text-align: left; padding: 5px 0"
               truncated
      >
        {{ props.abstract }}
      </el-text>
    </div>
  </el-card>
</template>
<script setup>
import { Document, Tools } from "@element-plus/icons-vue";
import { ElePlusUtils } from "@/common/utils.js";
import { useRouter } from "vue-router";

const props = defineProps({
  isExternalLink: {
    type: Boolean,
    default: false
  },

  title: {
    type: String,
    required: true
  },

  pageAttr: {
    type: String,
    required: true,
    validator: (value) => ['tool', 'article', 'game'].includes(value)
  },

  abstract: {type: String},

  // 路由名称
  routerName: {
    type: String
  },

  // 路由全路径
  url: {
    type: String,
    required: true
  },

  labels: {type: Array}
});
const router = useRouter();
const cardClick = () => {
  if (props.isExternalLink) {
    window.open(props.url)
  } else {
    router.push(props.url)
  }
}
</script>
<style lang="scss" scoped>
.card {
  border-radius: 10px;
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(13, 110, 253, 0.05);
  transition: transform 0.3s, border 0.3s;
  transform-origin: center center;
  outline: 2px solid transparent;
  cursor: pointer;
}

.card .title {
  display: flex;
  margin: 0 auto 8px auto;
  align-items: center;
  text-align: center;
}
</style>
