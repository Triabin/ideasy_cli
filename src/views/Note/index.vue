<!-- 我的笔记页面 -->
<template>
  <card-page :full-path="currPath" :cards="cards"></card-page>
</template>
<script setup>
import CardPage from "@/components/CardPage";
import { routes } from "@/router";
import { ref } from "vue";
import { ItemCardEle } from "@/common/classes.js";

const currPath = ref('/note');
const currRoutes = routes.filter(route => route.path === currPath.value);
const cards = ItemCardEle.createByRoute(currRoutes, currPath.value);
</script>
