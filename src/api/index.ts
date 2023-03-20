/*
 * @Author: fdhou
 * @Date: 2023-03-17 16:27:21
 * @LastEditors: fdhou
 * @LastEditTime: 2023-03-17 16:52:37
 * @Description:
 */
import request from '@/utils/request'

export function interfaceName(data?: any) {
  return request({
    url: '/api/xxxx', // url会和request中定义的baseURL拼接成地址
    method: 'get',
    params: data,
  })
}
