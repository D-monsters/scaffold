/*
 * @Author: fdhou
 * @Date: 2023-03-16 10:38:55
 * @LastEditors: fdhou
 * @LastEditTime: 2023-03-17 17:57:17
 * @Description:
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'

// https://cn.vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 需要用到的插件数组
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 自动导入element-plus样式，不配置的话，会出现ElMessage样式不生效问题
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => `element-plus/theme-chalk/${name}.css`,
        },
      ],
    }),
  ],
  server: {
    // 项目启动时，是否在浏览器中在打开应用城区
    open: true,
    //启动端口
    port: 8080,
    // 热模块替换
    hmr: {
      host: '127.0.0.1',
      port: 8080,
    },
    // 设置 https 代理
    proxy: {
      '/api': {
        target: 'http地址',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
})
