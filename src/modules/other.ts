import { createHead } from '@unhead/vue'
import type { VueApp } from 'types'
import copy from '~/utils/directives/copy'
import debounce from '~/utils/directives/debounce'
import throttle from '~/utils/directives/throttle'
import draggable from '~/utils/directives/draggable'

// Setup unhead head标签管理库
// https://unhead.unjs.io
export const setupOther: VueApp = (app) => {
  const head = createHead()
  app.use(head)
  // 复制指令
  app.directive('copy', copy)
  // 防抖指令
  app.directive('debounce', debounce)
  // 节流指令
  app.directive('throttle', throttle)
  // 拖拽指令
  app.directive('draggable', draggable)
  // 开发环境
  if (import.meta.env.DEV)
    // 使用mock数据
    import('~/apis/mocks')
}
