import request from '@/utils/request'
import menuList from '@/assets/json/menuList.json'
// 新建菜单
export function createMenu(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 修改菜单
export function updateMenu(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 删除菜单
export function deleteMenu(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 获取菜单列表
export function getMenuList(): any {
  // return request({
  //   url: '/menu/getMenuList',
  //   method: 'get'
  // })
  return Promise.resolve(menuList)
}
