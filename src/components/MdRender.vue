<!-- Markdown文件渲染组件 -->
<template>
  <div v-html="markdownDom"></div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { FileUtils } from "@/utils.js";
import MarkdownIt from 'markdown-it';
import markdownItHighlightjs from 'markdown-it-highlightjs';
import markdownItCodeCopy from 'markdown-it-code-copy';

const markdownDom = ref('');
const props = defineProps({
  // markdown文件路径
  mdPath: {
    type: String,
    required: true,
    validator: (value) => value.endsWith(".md")
  }
});

// 获取markdown-it实例
const md = new MarkdownIt()
    .use(markdownItHighlightjs) // 配置代码高亮插件
    .use(markdownItCodeCopy); // 配置代码块复制插件

// 解析Markdown
const analysisMd = async () => {
  if (!props.mdPath) return;
  const mdText = FileUtils.readFile(props.mdPath);
  return md.render(mdText);
};

onMounted(() => FileUtils.readFile(props.mdPath).then(content => {
  markdownDom.value = md.render(content)
}));
</script>
<style lang="scss" scoped>

</style>