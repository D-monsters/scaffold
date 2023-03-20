declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}
declare module 'element-plus'

// 处理类型“AxiosResponse<any, any>”上不存在属性“xxx”
// declare module 'axios' {
//   interface AxiosResponse {
//     (config: AxiosRequestConfig): Promise<any>
//   }
//   export function create(config?: AxiosRequestConfig): AxiosInstance
// }
