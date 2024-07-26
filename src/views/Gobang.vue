<!-- 五子棋 -->
<template>

</template>
<script setup>

/**
 * 方法描述：判断棋盘{@link board}上颜色为{@link color}的点{@link point}是否有效
 * @param board {Array<Array<Number>>} 棋盘
 * @param point {Array<Number>} 要判断的坐标点
 * @param color {Number} 棋子颜色
 * @returns {boolean}
 */
const isValid = (board, point, color) => {
  const rows = board.length;
  const cols = board[0].length;
  const [x, y] = point;
  if (x < 0 || x >= rows || y < 0 || y >= rows) { return false; }
  return board[x][y] === color;
};

/**
 * 方法描述：根据所有方向上判定输赢函数的共同点，为各个方向上的函数设计一个构建函数，即每个点判定输赢都是往两个不同方向数，只要达到5个同色棋子即为胜
 * @param p1Movement {function(Array<Number>): Array<Number>} 方向1的坐标变换函数
 * @param p2Movement {function(Array<Number>): Array<Number>} 方向2的坐标变换函数
 * @returns {Function} 判定输赢的函数
 */
const createIsWin = (p1Movement, p2Movement) => {
  /**
   * 方法描述：判断棋盘{@link board}上颜色为{@link color}的点{@link point}是否胜利
   * @param board 棋盘
   * @param point 要判断的棋子位置
   * @param color 棋子颜色
   */
  return (board, point, color) => {
    let count = 1; // 计数，点本身算一个
    let p1 = p1Movement(point);
    let p2 = p2Movement(point);
    while (1) {
      let p1Valid = false, p2Valid = false;
      if (isValid(board, p1, color)) {
        count++;
        p1Valid = true;
      }
      if (isValid(board, p2, color)) {
        count++;
        p2Valid = true;
      }
      if (count >= 5) return true;
      if (!p1Valid && !p2Valid) return false;
    }
  };
}

// 判断水平方向上的输赢
const isWinHorizontal = createIsWin(([x, y]) => [x + 1, y], ([x, y]) => [x - 1, y]);
// 判断垂直方向上的输赢
const isWinVertical = createIsWin(([x, y]) => [x, y + 1], ([x, y]) => [x, y - 1]);
// 判断斜线方向上输赢
const isWinSlash = createIsWin(([x, y]) => [x + 1, y + 1], ([x, y]) => [x - 1, y - 1]);
// 判断反斜线方向上输赢
const isWinBackSlash = createIsWin(([x, y]) => [x + 1, y - 1], ([x, y]) => [x - 1, y + 1]);

// 判定总的输赢
const isWin = (board, point, color) => isWinHorizontal(board, point, color) || isWinVertical(board, point, color) || isWinSlash(board, point, color) || isWinBackSlash(board, point, color);
</script>
<style lang="scss" scoped>

</style>