import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import type { VueApp } from 'types'

const router = createRouter({
  extendRoutes: routes => setupLayouts(routes),
  history: createWebHistory(),
})

// 全局前置守卫
router.beforeEach(async (_to, _from, _next) => {
  _next()
})

// 全局后置钩子
router.afterEach((_to, _from) => {

})

// 全局路由错误处理
router.onError((error) => {
  console.log(error, '路由错误')
})

// Setup vue-router
// https://router.vuejs.org
export const setupRouter: VueApp = async (app) => {
  app.use(router)
  await router.isReady()
}
export default router
