<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <!-- 导航栏 -->
      <el-header>
        <div class="layout-header">
          <div class="header-content">
            <div class="header-logo" @click="() => router.push('/home')">
              <Logo/>
            </div>

            <el-menu :default-active="activeIndex"
                     class="nav-menu"
                     mode="horizontal"
                     @select="handleSelect"
                     text-color="#0D6EFDAB"
                     active-text-color="#0D6EFDCB"
                     router
            >
              <el-menu-item index="/home">首页</el-menu-item>
              <el-menu-item index="/tool">工具</el-menu-item>
              <el-menu-item index="/game">小游戏</el-menu-item>
              <el-sub-menu index="/programming">
                <template #title>编程语言</template>
                <el-menu-item index="/programming/c-cpp">C/C++</el-menu-item>
                <el-menu-item index="/programming/java">Java</el-menu-item>
                <el-menu-item index="/programming/python">Python</el-menu-item>
                <el-sub-menu index="/programming/front">
                  <template #title>前端</template>
                  <el-menu-item index="/programming/front/html">html</el-menu-item>
                  <el-menu-item index="/programming/front/css">css</el-menu-item>
                  <el-menu-item index="/programming/front/javascript">JavaScript</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/programming/cangjie">仓颉</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="/note">笔记</el-menu-item>
              <el-menu-item index="/blog">博客</el-menu-item>
              <el-menu-item index="/reco-pages">收藏网页</el-menu-item>
            </el-menu>

            <div class="header-user">
              <div style="float:right; cursor: pointer; color: var(--el-color-primary);">
                <el-dropdown>
                  <img style="height: 35px; width: 35px" src="@/assets/images/user-default.png" alt="user"/>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>个人中心</el-dropdown-item>
                      <el-dropdown-item>设置</el-dropdown-item>
                      <el-dropdown-item>注销登录</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
          </div>
        </div>
      </el-header>

      <!-- 网页主体部分 -->
      <el-main>
        <div class="layout-main">
          <div class="main-content">
            <!-- 路由 -->
            <router-view v-if="isRouterReady" v-slot="{ Component }">
              <keep-alive>
                <component :is="Component"/>
              </keep-alive>
            </router-view>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
  <el-backtop :right="100" :bottom="100"/>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from "vue";
import Logo from '@/components/Logo';
import { useRouter } from "vue-router";

const router = useRouter();
const activeIndex = ref('/home');
const isRouterReady = ref(false);
onMounted(() => {
  isRouterReady.value = true;
  watch(() => router.currentRoute.value.fullPath, (newPath) => {
    let paths = newPath.split('/');
    activeIndex.value = paths && paths.length > 0 ? paths.slice(0, -1).join('/') : '/home';
  });
});

onBeforeUnmount(() => isRouterReady.value = false);

const handleSelect = (key, keyPath) => {
  activeIndex.value = key;
}
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
.el-header {
  position: relative;
}

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

/* 2.1.1 页眉中的logo */
.header-content .header-logo {
  width: 130px;
  height: 100%;
  float: left;
  padding: 10px 10px 0 0;
  vertical-align: middle;
  margin-right: 20px;
}

/* 2.1.2 页眉中的导航栏 */
.header-content .nav-menu {
  width: 50%;
  height: 100%;
  flex: 1;
  float: left;
  border-bottom: none !important;
}

/* 2.1.3 页眉中的用户信息部分 */
.header-content .header-user {
  width: 45px;
  height: 100%;
  float: right;
  padding-top: 12.5px;
}

/* 3. 页面主题部外层（便于居中） */
.el-main {
  position: absolute;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.layout-main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 3.1 页面主体部分 */
.layout-main .main-content {
  max-width: 1280px;
  width: 100%;
}

</style>
