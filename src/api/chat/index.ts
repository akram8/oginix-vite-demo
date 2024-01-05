import request from "/@/utils/request";
/**
 * 获取私聊用户列表
 * @param data 
 */
export function getUserList(data?: object) {
  return request({
      // url: '/meeting/userList',
      // url: 'https://yapi.smart-xwork.cn/mock/177849/api/meeting/userList',
      url: 'https://yapi.pro/mock/222138/oginix/chat/users',
      method: 'get',
      data
  })
}
/**
 * 获取私聊消息数据
 * @param data 
 */
export function getChatMessage(data?: object) {
  return request({
      // url: '/meeting/chat/message',
      url: 'https://yapi.smart-xwork.cn/mock/177849/api/meeting/chat/message',
      method: 'get',
      data
  })
}