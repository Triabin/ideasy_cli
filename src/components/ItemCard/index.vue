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
         style="white-space:nowrap; overflow: hidden; text-align: left;"
         :title="`标签：${props.labels.join(' | ')}`"
    >
      <el-tag v-for="i in Math.min(4, props.labels.length)"
              :key="props.labels[i - 1]"
              :type="ElePlusUtils.turnTypes()"
              effect="light"
              style="margin-right: 5px; float:left;"
              size="small"
              v-if="!props.labels[i - 1]"
      >
        {{ props.labels[i - 1] }}
      </el-tag>
    </div>
    <div style="text-align: left; padding: 5px 0 2px 0;" :title="props.abstract">
      <el-text type="info"
               line-clamp="4"
               style="white-space: pre-wrap; text-align: left;"
               truncated
               size="default"
      >
        {{ props.abstract }}
      </el-text>
    </div>
    <div class="footer">
      <el-text size="small" style="float:left;">
        {{ TimeUtils.convert(props.updateAt, TimeUtils.format1)?.format('yyyy-MM-dd') }}
      </el-text>
    </div>
  </el-card>
</template>
<script setup>
import { Document, Tools } from "@element-plus/icons-vue";
import { ElePlusUtils } from "@/common/utils.js";
import { useRouter } from "vue-router";
import { TimeUtils } from "@/common/utils.js";

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

  labels: {type: Array},

  // 更新时间（yyyy-MM-dd HH:mm:ss）
  updateAt: {type: String}
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
