<!-- 仓颉语言学习首页 -->
<template>
<!--  <card-page :full-path="currPath" :cards="cards"></card-page>-->
  华为还不让公开，敬请期待！
</template>
<script setup>
import CardPage from "@/components/CardPage";
import { cangjieRoutes as routes } from "../routeData.js";
import { ref } from "vue";
import { ItemCardEle } from "@/common/classes.js";

const currPath = ref('/programming/cangjie');
const cards = ItemCardEle.createByRoute(routes, '/programming');
</script>
