import { ItemCardEle } from "@/common/classes.js";

export const cards = [
  new ItemCardEle(
    false,
    '粒子时钟实现',
    'article',
    '网页刷新后，首先生成一定数量的粒子，随机分布在一个环形上；粒子迅速按照当前时间的数字为轨迹移动到指定位置上排列；粒子的排布随着时间的变化而变化。',
    'DynamicClock',
    '/ideasy/dynamic-clock',
    ['前端', 'JavaScript', 'vue', 'html', 'css'],
    '2024-08-07 15:58:27',
    undefined
    ),
  new ItemCardEle(
    false,
    'JS时间对象与String相互转换',
    'article',
    '主要描述了在JavaScript中Date对象按照指定格式格式化成时间字符串的方法以及根据时间字符串将其转换成Date对象的方法以及如何在项目中使用。',
    'JsDateStrConvert',
    '/ideasy/js-date-str-convert',
    ['前端', 'JavaScript', '格式化', 'Date'],
    '2024-08-07 19:17:26',
    undefined
  ),
  new ItemCardEle(
    false,
    'IntelliJ IDEA插入时间文本',
    'article',
    '需求：在使用IDEA编辑一些文本时，需要插入指定格式的当前时间文本，首先想到的是找找有没有相关的IDEA插件，看到确实有别的猿做过相关的插件，但当时找到的文章是需要下载博主提供的离线插件jar包，而且时间格式是否能灵活自定义还未知，且当时刚好灵光一现，有了别的方法，一个不需要安装插件，而且更加灵活自由的方法，所以没有往下细看。',
    'IntellijIdeaIstTime',
    '/ideasy/intellij-idea-ist-time',
    ['IDEA', '时间格式化'],
    '2024-08-09 12:50:26',
    undefined
  )
]
