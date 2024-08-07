import { ItemCardEle } from "@/common/classes.js";

export const cards = [
  new ItemCardEle(
    false,
    '粒子时钟实现',
    'article',
    '网页刷新后，首先生成一定数量的粒子，随机分布在一个环形上；粒子迅速按照当前时间的数字为轨迹移动到指定位置上排列；粒子的排布随着时间的变化而变化。',
    'DynamicClock',
    '/ideasy/dynamic-clock',
    ['前端', 'JavaScript', 'vue', 'html', 'css']
    ),
  new ItemCardEle(
    false,
    'JS时间对象与String相互转换',
    'article',
    '主要描述了在JavaScript中Date对象按照指定格式格式化成时间字符串的方法以及根据时间字符串将其转换成Date对象的方法以及如何在项目中使用。',
    'JsDateStrConvert',
    '/ideasy/js-date-str-convert',
    ['前端', 'JavaScript', '格式化', 'Date']
  )
]
