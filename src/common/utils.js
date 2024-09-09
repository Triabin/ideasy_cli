/**
 * @type { Object } 数学工具对象
 */
export const MathUtils = {
  /**
   * 函数描述：获取指定区间的随机整数
   * @param min {number} 最小值
   * @param max {number} 最大值
   * @return { number } 符合条件的随机整数
   */
  randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

  /**
   * 函数描述：在坐标系上计算从距离指定位置指定距离且指定角度点的坐标
   * @param distance {number} 指定距离
   * @param rad {number} 指定角度的弧度值
   * @param from { {x: number, y: number} } 起始坐标数组，from.x：横坐标、from.y：纵坐标
   * @return { {x: number, y: number} } 目标地点坐标，dest.x：横坐标、dest.y：纵坐标
   */
  computeCoordinates: (distance, rad, from) => {
    from = from || { x: 0, y: 0 };
    return {
      x: from.x + distance * Math.cos(rad),
      y: from.y + distance * Math.sin(rad)
    };
  }
}

/**
 * @type { Object } 文件工具对象
 */
export const FileUtils = {
  /**
   * 方法描述：读取文件内容（nodejs环境中）
   * @param path {String} 文件路径
   * @return {String} 文件内容
   */
  readFile: async (path) => {
    const response = await fetch(path);
    if (response.ok) {
      return await response.text();
    } else {
      throw new Error(`${path} not found`);
    }
  }
}

/**
 * @type { Object } 时间工具对象
 */
export const TimeUtils = {
  format1: 'yyyy-MM-dd HH:mm:ss',
  format2: 'yyyy-M-d H:m:s',
  format3: 'yyyy年MM月dd日 HH时mm分ss秒',

  /**
   * 方法描述：将字符串转为时间对象
   * @param time {String} 时间字符串
   * @param format {String} 时间格式
   * @returns {Date}
   */
  convert(time, format = this.format1) {
    if (time instanceof Date) {
      return time;
    }
    if (time && typeof time === 'string') {
      let getValue = function (regex) {
        let str = regex ? time.substr(regex.index, regex[0].length) : '';
        return str ? parseInt(str) : undefined;
      }
      // 各个时间的值，未获取到则取最小值
      let times = [
        getValue(/y+/.exec(format)) || 0, // 年
        getValue(/M+/.exec(format)) || 0, // 月
        getValue(/d+/.exec(format)) || 1, // 日
        /H+/.test(format) ? getValue(/H+/.exec(format)) : ((/h+/.test(format) && /pm/i.test(format)) ? getValue(/h+/.exec(format)) + 12 : getValue(/h+/.exec(format))) || 0, // 时
        getValue(/m+/.exec(format)) || 0, // 分
        getValue(/s+/.exec(format)) || 0, // 秒
        function () {
          let reg, regArr;
          reg = new RegExp(/(\d{1,3}).*/, 'g'); reg.lastIndex = format.indexOf("S");
          return reg.lastIndex > -1 ? (regArr = reg.exec(time)) && parseInt(regArr[1]) : undefined;
        } () || 0// 毫秒
      ];
      times[1] && (times[1] -= 1);
      return new Date(...times);
    } else {
      throw new Error(`${time} is not a time string!`);
    }
  }
}

/**
 * @type { Object } element-plus相关的工具类
 */
export const ElePlusUtils = {
  /**
   * 方法描述：轮流获取element-plus的type属性几个值
   *
   * @return { ('primary' | 'success' | 'info' | 'warning' | 'danger') }
   */
  turnTypes: (() => {
    let lastIndex = 0;
    let types = ['primary', 'success', 'info', 'warning', 'danger'];
    return () => {
      if (lastIndex > types.length - 1) lastIndex = 0;
      return types[lastIndex++];
    };
  })()
}
