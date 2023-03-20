/*
 * @Author: fdhou
 * @Date: 2023-03-16 10:38:55
 * @LastEditors: fdhou
 * @LastEditTime: 2023-03-17 15:08:10
 * @Description:
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from '@/router'

// 创建vue实例
const app = createApp(App)
app
  .use(store) // 挂载pinia
  .use(router) // 挂载router
  .mount('#app') // 挂载实例
