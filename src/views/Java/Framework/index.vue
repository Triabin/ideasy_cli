<!-- 框架面试题页面 -->
<template>
  <div style="display: flex">
    <el-button type="primary" :on-click="() => questionList.forEach(question => question.showAnswer = true)" plain>显示所有答案</el-button>
    <el-button type="warning" :on-click="() => questionList.forEach(question => question.showAnswer = false)" plain>隐藏所有答案</el-button>
  </div>
  <div class="question"
       v-for="(question, index) in questionList"
       :key="index"
  >
    <h4>{{ `${index + 1}、${question.question}` }}</h4>
    <div v-if="question.showAnswer" v-html="answerToHtml(question.answer)"></div>
    <el-button @click="() => question.showAnswer = !question.showAnswer">
      {{ `${question.showAnswer ? '隐藏' : '查看'}答案` }}
    </el-button>
  </div>
</template>
<script setup>
import questions from './questions.js';
import { reactive } from "vue";

const questionList = reactive(questions.map(question => ({
  ...question,
  showAnswer: false
})));

const answerToHtml = answer => answer && answer.split('\n').map(line => `<p>${line}</p>`).join('\n');

</script>
<style lang="scss" scoped>

</style>