import type { VueApp } from 'types'
import { setupRouter } from './router'
import { setupPinia } from './pinia'
import { setupOther } from './other'

export const installAll: VueApp = (app) => {
  // 安装全局状态管理
  setupPinia(app)
  // 安装路由
  setupRouter(app)
  // 最后安装其他模块
  setupOther(app)
}
