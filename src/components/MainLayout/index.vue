<!-- 页面主题布局 -->
<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <!-- 导航栏 -->
      <el-header height="60px">
        <div class="layout-header">
          <div class="header-content">
            <slot name="nav"></slot>
          </div>
        </div>
      </el-header>

      <!-- 网页主体部分 -->
      <el-main>
        <div class="layout-main">
          <div class="main-content">
            <slot></slot>/
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
  <el-backtop v-show="props.isVisible2Top" :right="100" :bottom="100"/>
</template>

<script setup>
const props = defineProps({
  isVisible2Top: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
/* 1. 最外层 */
.common-layout {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

/* 2. 页眉最外层 */
.layout-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--el-menu-border-color);
}

/* 2.1 页眉内容（便于居中） */
.layout-header .header-content {
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
}

/* 3. 页面主题部外层（便于居中） */
.layout-main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 3.1 页面主题部分 */
.layout-main .main-content {
  max-width: 1280px;
  width: 100%;
}

</style>

