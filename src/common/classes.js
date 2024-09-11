/**
 * 类描述：网页卡片数据存放类
 */
export class ItemCardEle {
  /**
   * 方法描述：卡片数据类构造器
   * @param title {String} 卡片标题
   * @param pageAttr {'tool' | 'blog' | 'note' | 'page' | 'game'} 卡片属性类型，用于确定卡片图标
   * @param desc {String} 卡片文章摘要/内容简介
   * @param routerName {String} 内部网页的路由名称
   * @param url {String} 内部网页的路由地址/外部网址的地址
   * @param labels {Array<String>} 网页/内容标签
   * @param createdAt {String} 创建时间字符串（yyyy-MM-dd HH:mm:ss）
   * @param updatedAt {String} 修改时间字符串（yyyy-MM-dd HH:mm:ss）
   * @param isExternalLink {Boolean} 标识是否为外部链接
   */
  constructor(title, pageAttr, desc, routerName, url, labels, createdAt, updatedAt, isExternalLink = false) {
    this.title = title;
    this.pageAttr = pageAttr;
    this.desc = desc;
    this.routerName = routerName;
    this.url = url;
    this.labels = labels;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt || createdAt;
    this.isExternalLink = isExternalLink;
  }

  /**
   * 方法描述：根据路由名称获取卡片数据
   * @param routes {Array<{}>} 路由数组
   * @param parentPath {String} 当前路由路径
   * @returns {Array<ItemCardEle>} 卡片数据
   */
  static createByRoute(routes, parentPath = '/') {
    if (!routes || !routes.length) return [];
    let res = [];
    for (let route of routes) {
      let currPath = parentPath.endsWith('/') ? parentPath + route.path : `${parentPath}/${route.path}`;
      currPath = parentPath === '/' ? currPath.slice(1) : currPath;
      if (route.children) {
        res.push(...this.createByRoute(route.children, currPath));
      } else {
        // 跳过一级路由
        if (route.path === '/' || /\/[a-zA-Z0-9_\-]+/.test(route.path)) {
          continue;
        }
        res.push(
          new ItemCardEle(
            route.meta.title,
            route.meta.pageAttr,
            route.meta.desc,
            route.name,
            currPath,
            route.meta.labels,
            route.meta.createdAt,
            route.meta.updatedAt
          ))
      }
    }
    return res;
  }
}
