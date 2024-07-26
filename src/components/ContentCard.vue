<!-- 卡片组件 -->
<template>
  <div class="content-card">
    <a :href="props.href">
      <div class="card-title">
        <Tools v-if="props.cardType === 'tool'" style="width: 1em; height: 1em; margin-right: 8px"/>
        <Document v-if="props.cardType === 'article'" style="width: 1em; height: 1em; margin-right: 8px"/>
        <h5>{{ props.title }}</h5>
      </div>
      <div class="card-desc" :title="props.description">{{ props.description }}</div>
    </a>
  </div>
</template>
<script setup>
import { Tools, Document } from "@element-plus/icons-vue";
import { defineProps } from "vue";

const props = defineProps({
  // 类型，tool为工具，article为博客文章
  cardType: {
    type: String,
    required: true,
    validator: (value) => ['tool', 'article'].includes(value)
  },

  // 对应工具/博客文章跳转路由
  href: {
    type: String,
    required: true
  },

  // 工具/文章标题
  title: {
    type: String,
    required: true
  },

  // 工具/文章简介
  description: {
    type: String,
    required: true
  }
});

</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}

.content-card {
  border: 2px solid rgba(0, 0, 0, .25);
  border-radius: 0.25rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(13, 110, 253, 0.05);
  transition: transform 0.3s, border 0.3s;
  transform-origin: center center;
  outline: 2px solid transparent;
}

.card-title {
  display: flex;
  margin: 0 auto;
  align-items: center;
  text-align: center;
}

.card-desc {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

</style>