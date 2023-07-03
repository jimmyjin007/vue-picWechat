import axios from 'axios'
const errTips = msg => {
  alert(msg)
}
// 创建axios实例
const BASEURL = process.env.NODE_ENV === "production" ? "" : "/api";
const BASE = 'https://awake.zeabur.app/pictureShare'
const service = axios.create({
    // 本地测试 相对路径
    // baseURL: '/admin/pdctodo/services', // 测试地址
    baseURL: BASE,
    timeout: 60 * 60 * 1000 * 1 ,// 请求超时时间 设为1分钟,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
  let token = 'test'
  config.headers.token = token
  console.log("config:",config,"config.data:",config.data)
  return config
  // if (config.headers['Content-Type'] === 'multipart/form-data') {
  //   console.log(config)
  // } else if (config.method === 'post') {
  //   // 空数据请求处理
  //   if (typeof (config.data) !== 'undefined') {
  //       // 请求数据过滤
  //       config.data = filterSpecial(JSON.stringify(config.data))
  //   }
  //   // 登录 header X_AUTH_HEADER_TOKEN 信息
  //   let tmpToken = getToken() || ''
  //   if (tmpToken.length > 0) {
  //       config.headers = Object.assign(config.headers, { X_AUTH_HEADER_TOKEN: tmpToken })
  //   }
  // }
  // debugger
  // console.log("config123:",config)
  // if (config.headers['Content-Type'] === 'multipart/form-data') {
  //   let formData = new FormData()
  //   let reqData = config.data.get('reqData')
  //   config.data.delete('reqData')
  //   reqData = JSON.parse(reqData)
  //   reqData = {
  //       reqParam: {
  //         ...reqData
  //       }
  //   }
  //   formData.append('reqParam', JSON.stringify(reqData.reqParam))
  //   for (let entry of config.data.entries()) {
  //       let [ key, value ]  = entry
  //       formData.append(key, value)
  //   }
  //   config.data = formData
  // } else {
  //     config.data = {
  //         reqParam: {
  //           ...config.data
  //         }
  //     }
  // }
  //   console.log("config:",config)
  //   // 在发送请求之前做些什么
  }, error => {
    errTips(err)
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

//  token处理逻辑
let tokens = null
function getToken() {
    if (!tokens) {
        tokens = JSON.parse(sessionStorage.getItem('tokens')) || []
    }
    if (tokens.length) {
        let token = tokens.shift()
        return token
    } else {
        return null
    }
}
export default service;