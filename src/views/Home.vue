<!-- 首页 -->
<template>
  <!-- 导航栏 -->
  <div>
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
      <el-menu-item index="1" route="">首页</el-menu-item>
      <el-menu-item index="2">灵光实现</el-menu-item>
      <el-menu-item index="3" disabled>他人之法</el-menu-item>
      <el-menu-item index="4">经验之谈</el-menu-item>
    </el-menu>

    <!-- 时钟 -->
    <Clock/>
  </div>
</template>

<script lang="js" setup>
import {ref} from 'vue';
import Clock from '@/components/Clock/index.vue';

const handleSelect = (key, keyPath) => console.log(key, keyPath);
</script>

<style scope>

</style>