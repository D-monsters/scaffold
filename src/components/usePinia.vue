<!--
 * @Author: fdhou
 * @Date: 2023-03-16 15:11:04
 * @LastEditors: fdhou
 * @LastEditTime: 2023-03-16 18:17:30
 * @Description: 
-->
<template>
  <div>{{ name }}</div>
</template>

<script lang="ts" setup>
import { UserStore } from '@/store/user'
import { ref } from 'vue'
const store = UserStore()
console.log(store)

const name = ref<string>(store.name)
console.log(UserStore.name)
// userStore.updateName('王五')
</script>
