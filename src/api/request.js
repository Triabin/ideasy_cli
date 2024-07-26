import axios from "axios";
import {ElMessage} from "element-plus";
import config from "@/config";

const service = axios.create({
  baseURL: config.baseApi
});

// 添加请求拦截器
// service.interceptors.request.use();

// 添加响应拦截器
service.interceptors.response.use(res => {
  const {code, msg, data} = res;
  if (code === 200) {
    return data;
  } else {
    ElMessage.error(msg || "Something went wrong");
    return Promise.reject(msg || "Something went wrong");
  }
});

const request = options => {
  options.method = options.method || 'get'; // 默认get请求
  // 关于GET请求的调整(get请求的参数字段为params，其余为data)，现全部调整为data
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data;
  }
  // 对mock做一个开关处理（具体接口请求上的配置优先级大于全局配置）
  let isMock = typeof options.mock !== 'undefined' ? options.mock : config.mock;

  // 针对环境处理
  if (config.env === 'production') {
    // 生产环境不能使用mock
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
  }
  return service(options);
};

export default request;