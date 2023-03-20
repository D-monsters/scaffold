<!--
 * @Author: fdhou
 * @Date: 2023-03-20 15:15:38
 * @LastEditors: fdhou
 * @LastEditTime: 2023-03-20 15:41:32
 * @Description: 
-->
<template>
  <div>登录页</div>
  <button @click="clickFn">按钮</button>
  <el-form-item>
    <el-button type="success" @click="clickFn">成功</el-button>
  </el-form-item>
</template>
<script lang="ts" setup>
import { interfaceName } from '@/api/index'
const clickFn = () => {
  interfaceName({ name: '测试一下接口' })
}
</script>
