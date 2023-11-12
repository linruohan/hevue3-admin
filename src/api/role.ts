import request from '@/utils/request'
import roleList from '@/assets/json/roleList.json'
import rolePermissionList from '@/assets/json/rolePermissionList.json'
// 添加角色
export function createRole(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 更新角色信息
export function updateRole(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 获取角色列表
export function getRoleList(query: any): any {
  // return request({
  //   url: '/role/getRoleList',
  //   method: 'get',
  //   params: query
  // })
  return Promise.resolve(roleList)
}

// 删除角色
export function deleteRole(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 获取登录者所属角色的权限
export function getRolePermission(): any {
  // return request({
  //   url: '/role/getRolePermission',
  //   method: 'get'
  // })
  return Promise.resolve(rolePermissionList)
}
