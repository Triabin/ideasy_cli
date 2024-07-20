// index.js文件
import { defineAsyncComponent } from "vue";

/**
 * @description 在src/components目录下创建文件，即 src/components/xxx.vue
 * @description 在src/components目录下创建目录及文件，即 src/components/xxx文件夹/xxx.vue
 */
const components = import.meta.glob("./**/**.vue");
console.log(components)
export default function install(app) {
  for (const [key, value] of Object.entries(components)) {
    let matcher = /(\S+)\/index\.\S+$/.exec(key);
    let matcherName = matcher[1];
    const name = matcher ? matcherName.slice(matcherName.lastIndexOf('/') + 1) : key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    app.component(name, defineAsyncComponent(value));
  }
}
