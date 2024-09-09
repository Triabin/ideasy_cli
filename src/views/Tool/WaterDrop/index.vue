<!-- 水滴样式实现 -->
<template>
  <el-row style="margin-top: 5vh">
    <!-- 来源：https://v.douyin.com/ir9tTw3G/ -->
    <el-col :span="16">
      <div class="edging">
        <div class="drop position0">
          <div class="highlight"></div>
        </div>
        <div class="drop position1">
          <div class="highlight"></div>
        </div>
        <div class="drop position2">
          <div class="highlight"></div>
        </div>
        <div class="drop position3">
          <div class="highlight"></div>
        </div>
        <div class="box"></div>
      </div>
    </el-col>
    <el-col :span="8">
      配色
    </el-col>
  </el-row>
</template>
<script lang="js" setup>
import { ref, reactive } from "vue";

const borderColor = ref('#666666');
const upColor = ref('#FAFAFA');
const downColor = ref('#CCCCCC');
// 配色1：#666666 #FAFAFA #CCCCCC
// 配色2：#284B3C #438B7C #62BE9D
// 配色3：#666666 #FAFAFA #E1767D
// 配色4：#666666 #FAFAFA #F2D656

const edging = reactive({
  width: '600px',
  height: '800px',
  border: '30px solid #666',
  position: 'relative',
  backgroundColor: '#FAFAFA',
  overflow: 'hidde'
});
</script>
<style lang="scss" scoped>
.edging {
  width: 600px;
  height: 800px;
  border: 30px solid #666;
  position: relative;
  background-color: #FAFAFA;
  overflow: hidden;
}

.drop {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: -2px 8px 3px -4px #FFF,
  -3px 16px 8px 0 #444,
  -2px 14px 14px #62BE9D inset;
  position: absolute;
  z-index: 20;
}

.position0 {
  top: 80px;
  left: 300px;
}

.position1 {
  top: 230px;
  left: 105px;
}

.position2 {
  top: 335px;
  left: 300px;
}

.position3 {
  top: 560px;
  left: 295px;
}

.highlight {
  background-color: #FFF;
  width: 4px;
  height: 8px;
  position: absolute;
  top: 9px;
  right: 22px;
  transform: rotate(106deg);
  border-radius: 2px;
}

.box {
  width: 675px;
  height: 600px;
  position: absolute;
  top: 413px;
  left: -16px;
  background-color: #62BE9D;
  transform: rotate(-10deg);
  z-index: 10;
}
</style>
