<!-- 我的笔记/博客 -->
<template>
  <el-row :gutter="20">
    <el-col :span="2">
      左aside
      <div>
        不知道放啥内容
      </div>
    </el-col>
    <el-col :span="16">
      中间内容
      目录
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
    </el-col>
    <el-col :span="2">
      <div>
        目录
        <ul>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
import MdRender from "@/components/MdRender.vue";

</script>
<style lang="scss" scoped>
.blog-note {
  display: flex;
  width: 100%;
}
</style>