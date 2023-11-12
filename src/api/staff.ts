import request from '@/utils/request'
import staffList from '@/assets/json/staffList.json'
// 员工登录
export function login(data: any): any {
  // return request({
  //   url: '/staff/login',
  //   method: 'post',
  //   data,
  // })
  return Promise.resolve({
    code: 200,
    data: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBhZTMwODNmNGI0MjQ5OGY3YmVlZjIiLCJpYXQiOjE2ODIwMDY2ODgsImV4cCI6MTY4MjE3OTQ4OH0.ODAgKM8LqSFerOpLN0PlU60DCBMHCpC8t2XJu8GU9JE',
    msg: 'success',
  })
}

// 添加员工
export function createStaff(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 更新员工信息
export function updateStaff(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 获取员工信息
export function getStaffInfo(): any {
  // return request({
  //   url: '/staff/getStaffInfo',
  //   method: 'get',
  // })
  return Promise.resolve({
    code: 200,
    msg: 'success',
    data: {
      _id: '640ae3083f4b42498f7beef2',
      __v: 0,
      createdAt: '2022-11-14T07:42:52.076Z',
      gender: '1',
      staff_account: 'admin',
      staff_name: 'admin',
      status: '1',
      updatedAt: '2023-04-06T11:53:02.553Z',
      phone: '16655559999',
      roleId: '6416ebbc207e76b41336538e',
    },
  })
}
// 修改密码
export function updatePassword(data: {
  phone: string
  uuid: string
  captcha: string
  password: string
}): Promise<Object> {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 获取员工列表
export function getStaffList(query: any): any {
  // return request({
  //   url: '/staff/getStaffList',
  //   method: 'get',
  //   params: query,
  // })
  return Promise.resolve(staffList)
}

// 修改员工状态
export function updateStaffStatus(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}
