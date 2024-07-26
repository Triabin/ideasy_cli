import Mock from 'mockjs';
import userApi from './mockData/user';

// 参数列表：拦截路径（正则）、拦截（请求）方法、制造的假数据
Mock.mock(/\/api\/user\/queryUsers/, 'get', userApi.queryUsers);