<!-- Java学习首页 -->
<template>
  <card-page :full-path="currPath" :cards="cards"></card-page>
</template>
<script setup>
import CardPage from "@/components/CardPage";
import { javaRoutes as routes } from "../routeData.js";
import { ref } from "vue";
import { ItemCardEle } from "@/common/classes.js";

const currPath = ref('/programming/java');
const cards = ItemCardEle.createByRoute(routes, currPath.value);
</script>
