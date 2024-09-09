<!-- 推荐的一些网页页面 -->
<template>
  <card-page full-path="/reco-pages" :cards="cards"></card-page>
</template>
<script setup>
import CardPage from "@/components/CardPage";
import { cards } from "./cards.js";
</script>
