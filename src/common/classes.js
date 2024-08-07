/**
 * 类描述：网页卡片数据存放类
 */
export class ItemCardEle {
  /**
   * 方法描述：卡片数据类构造器
   * @param isExternalLink {Boolean} 标识是否为外部链接
   * @param title {String} 卡片标题
   * @param pageAttr {'tool' | 'article' | 'game'} 卡片属性类型，用于确定卡片图标
   * @param abstract {String} 卡片文章摘要/内容简介
   * @param routerName {String} 内部网页的路由名称
   * @param url {String} 内部网页的路由地址/外部网址的地址
   * @param labels {Array} 网页/内容标签
   */
  constructor(isExternalLink, title, pageAttr, abstract, routerName, url, labels) {
    this.isExternalLink = isExternalLink;
    this.title = title;
    this.pageAttr = pageAttr;
    this.abstract = abstract;
    this.routerName = routerName;
    this.url = url;
    this.labels = labels;
  }
}
