import axios from 'axios'

const service = axios.create({
  headers: {},
  // 请求时长
  timeout: 1000 * 30,
  // 请求的base地址
  baseURL: 'http:xxx',
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false,
})

// 接口请求拦截
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 接口响应拦截
service.interceptors.response.use(
  (config) => {
    return config.data
  },
  (error) => {
    return Promise.reject(error)
  },
)
export default service
