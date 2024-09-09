<!-- C/C++学习路线首页 -->
<template>
    <card-page :full-path="currPath" :cards="cards"></card-page>
</template>
<script setup>
import CardPage from "@/components/CardPage";
import { cCppRoutes as routes } from "../routeData.js";
import { ref } from "vue";
import { ItemCardEle } from "@/common/classes.js";

const currPath = ref('/programming/c-cpp');
const cards = ItemCardEle.createByRoute(routes, currPath.value);
</script>
