// 数字相关工具
export const NumUtils = {
  randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
}

// 文件相关工具
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
 * @desc 时间工具对象
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
 * @desc element-plus相关的工具类
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
      if (lastIndex >= types.length - 1) lastIndex = 0;
      return types[lastIndex++];
    };
  })()
}
