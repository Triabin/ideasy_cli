<!-- Java基础面试题页面 -->
<template>
  <el-row :gutter="20">
    <el-col :span="2">
      <div>
      </div>
    </el-col>
    <el-col :span="16">
      <md-render md-path="/src/assets/mdfiles/Java基础.md"/>
    </el-col>
    <el-col :span="2">
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
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