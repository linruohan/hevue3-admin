// 菜单类型
export const menuTypeDic: defaultType = {
  '1': '菜单',
  '2': '页面',
  '3': '按钮',
  default: '1',
}
Object.defineProperty(menuTypeDic, 'default', {
  enumerable: false,
})

export const menuTestDic: object = {
  '1': '菜单',
  '2': '页面',
  '3': '按钮',
}

// 菜单是否隐藏
export const menuHideDic: boolRadio & defaultType = {
  '0': '否',
  '1': '是',
  trueValue: '1',
  default: '0',
}
Object.defineProperty(menuHideDic, 'trueValue', {
  enumerable: false,
  // 初始化的时候就可以直接写menuHideDic.default来当初始值啦。但这样写又会有一个问题，那就是在表单渲染的时候会把这个default也渲染上。
  // 这个问题我们可以给default字段设置不可枚举来解决。
})
Object.defineProperty(menuHideDic, 'default', {
  enumerable: false,
})

// 菜单是缓存
export const menuCacheDic: boolRadio & defaultType = {
  '0': '否',
  '1': '是',
  trueValue: '1',
  default: '0',
}
Object.defineProperty(menuCacheDic, 'trueValue', {
  enumerable: false,
})
Object.defineProperty(menuCacheDic, 'default', {
  enumerable: false,
})

// 菜单是否固定到标签栏
export const menuAffixDic: boolRadio & defaultType = {
  '0': '否',
  '1': '是',
  trueValue: '1',
  default: '0',
}

Object.defineProperty(menuAffixDic, 'trueValue', {
  enumerable: false,
})
Object.defineProperty(menuAffixDic, 'default', {
  enumerable: false,
})

// 是否常显菜单栏
export const menuAlwaysShowDic: boolRadio & defaultType = {
  '0': '否',
  '1': '是',
  trueValue: '1',
  default: '1',
}
Object.defineProperty(menuAlwaysShowDic, 'trueValue', {
  enumerable: false,
})
Object.defineProperty(menuAlwaysShowDic, 'default', {
  enumerable: false,
})
// 此处后期可研究一下原型的应用
