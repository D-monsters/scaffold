/*
 * @Author: fdhou
 * @Date: 2023-03-16 15:08:58
 * @LastEditors: fdhou
 * @LastEditTime: 2023-03-17 15:02:35
 * @Description:
 */
import { defineStore } from 'pinia'
export const UserStore = defineStore('users', {
  state: () => {
    return {
      name: '菠萝!!!',
    }
  },
  // actions: {
  //   updateName(name: string) {
  //     this.name = name
  //   },
  // },
})
