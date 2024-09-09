<!-- 声音动效实现原理 -->
<template>
  <div style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0)">
    <canvas ref="cvs"></canvas>
    <audio ref="audio"
           src="/JS%20-%20杀破狼.flac"
           @play="play"
           controls
    ></audio>
    <audio src="/Alan%20Walker%20-%20Faded.mp3"
           controls
    ></audio>
  </div>
</template>
<script setup>

import { onMounted, ref } from "vue";
import { MathUtils } from "@/common/utils.js";

const audio = ref();
const cvs = ref();
const ctx = ref();
const isInit = ref(false);
const analyser = ref(undefined);
const buffer = ref();
onMounted(() => {
  ctx.value = cvs.value.getContext('2d');
  initCvs();
  update();
  // draw(new Array(100).fill(0).map(() => Math.random() * 128), 128);
});

const initCvs = () => {
  const size = 500;
  cvs.value.width = size * devicePixelRatio;
  cvs.value.height = size * devicePixelRatio;
  cvs.value.style.width = cvs.value.style.height = size + 'px';
}

/**
 * 函数描述：按照轨迹画出指定数量的圆点
 * @param datas {Array<number>} 一定数量的数字数组
 * @param maxValue {number} datas中的最大值
 */
const draw = (datas, maxValue) => {
  if (!datas || datas.length === 0 || maxValue <= 0) return;
  // 1. 圆形：要画数组中每一个数字的光柱高低需要先确认每一个点的初始坐标，已知数组长度length，那么可以根据圆半径r逐个通过夹角确定每一个点的坐标，
  // 最后再根据数组每个元素数值（绘制的直线长度）确定直线终点坐标
  // 1.1 确定圆心坐标和圆半径
  const ax = cvs.value.width / 2;
  const ay = cvs.value.height / 2;
  const ar = Math.min(cvs.value.width, cvs.value.height) / 4;
  // 1.2 圆被分割成(数组的长度)份，所以每次递增夹角为 2π/length
  let rad = 0;
  for (let i = 0; i < datas.length; i++) {
    let len = datas[i];
    // 1.3 确定起点坐标
    let {x, y} = MathUtils.computeCoordinates(ar, rad, {x: ax, y: ay});
    // 1.4 确定终点坐标
    let {x: tx, y: ty} = MathUtils.computeCoordinates(len, rad, {x: x, y: y});
    // 1.5 在画布上画出该直线
    ctx.value.strokeStyle = '#5445544D';
    ctx.value.lineWidth = 5;
    ctx.value.moveTo(x, y);
    ctx.value.lineTo(tx, ty);
    ctx.value.stroke();
    rad += 2 * Math.PI / datas.length;
  }
}

const play = () => {
  if (isInit.value) return;
  const audioCtx = new AudioContext();
  // 创建一个音频分析器节点
  analyser.value = audioCtx.createAnalyser();
  analyser.value.fftSize = 512; // 设置图形的精细程度，越大越精细，必须为2的指数次幂，结果为该数值的一半
  // buffer.value = new Uint8Array(256); // 精细程度数值的一半
  buffer.value = new Uint8Array(analyser.value.frequencyBinCount); // 或者直接使用这个属性

  // 配置音频数据来源
  const source = audioCtx.createMediaElementSource(audio.value)
  // 分析器连接数据源
  analyser.value.connect(source);
  // 最后分析器还需要将数据源输出到设备，完成上下文连接
  analyser.value.connect(audioCtx.destination);
  isInit.value = true;
}

const update = () => {
  requestAnimationFrame(update)
  if (!isInit.value) return;
  analyser.value.getByteFrequencyData(buffer.value); // 获取频率图（可以理解为不同音量下的频率）
  // analyser.value.getByteTimeDomainData(buffer.value); // 获取时域图（可以理解为不同时间声音的振幅）
  console.log(buffer.value);
  draw(buffer.value, 128);
}
</script>
<style lang="scss" scoped>

</style>
