<!-- 实现的一些小工具页面 -->
<template>
  <card-page :full-path="currPath" :cards="cards"></card-page>
</template>
<script setup>
import CardPage from "@/components/CardPage";
import { routes } from "@/router";
import { ref } from "vue";
import { ItemCardEle } from "@/common/classes.js";

const currPath = ref('/tool');
const currRoutes = routes.filter(route => route.path === currPath.value);
const cards = ItemCardEle.createByRoute(currRoutes, currPath.value);
</script>
