<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <!-- 导航栏 -->
      <el-header height="60px">
        <div class="layout-header">
          <div class="header-content">
            <div class="header-logo" :onclick="logoClick">
              <Logo/>
            </div>
            <el-menu
                :default-active="activeIndex"
                class="nav-menu"
                mode="horizontal"
                @select="handleSelect"
                text-color="#0D6EFDAB"
                active-text-color="#0D6EFDCB"
                router
            >
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="2" v-show="false">灵光</el-menu-item>
              <el-menu-item index="3" v-show="false">前人</el-menu-item>
              <el-menu-item index="/mine">我的</el-menu-item>
              <el-menu-item index="/java">Java</el-menu-item>
            </el-menu>
            <div class="header-user" v-show="false"> <!-- 暂不显示 -->
              <div style="float:right; cursor: pointer; color: var(--el-color-primary);">
                <el-dropdown>
                  <img style="height: 35px; width: 35px" src="/src/assets/images/user-default.png" alt="user"/>
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

      <el-main>
        <div class="layout-main">
          <div class="main-content">
            <!-- 路由 -->
            <router-view></router-view>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Logo from '@/components/Logo.vue';
import {useRouter} from "vue-router";

const activeIndex = ref('/');
const handleSelect = (key, keyPath) => console.log(key, keyPath);
const router = useRouter();

const logoClick = () => {
  activeIndex.value = '/';
  router.push('/');
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
}
/* 2.1.1 页眉中的导航栏 */
.header-content .nav-menu {
  width: 50%;
  height: 100%;
  flex-grow: 1; /* 让菜单随着容器宽度增长 */
  border-bottom: none !important;
}
/* 2.1.2 页眉中的logo */
.header-content .header-logo {
  width: 10%;
  height: 100%;
  float: left;
  vertical-align: middle;
}
/* 2.1.3 页眉中的用户信息部分 */
.header-content .header-user {
  width: 30%;
  height: 100%;
  float: right;
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
