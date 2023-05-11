import axios from 'axios'
// 创建axios实例
const BASEURL = process.env.NODE_ENV === "production" ? "" : "/api";
const service = axios.create({
    // 本地测试 相对路径
    // baseURL: '/admin/pdctodo/services', // 测试地址
    baseURL: BASEURL,
    timeout: 60 * 60 * 1000 * 1 // 请求超时时间 设为1分钟
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default service;